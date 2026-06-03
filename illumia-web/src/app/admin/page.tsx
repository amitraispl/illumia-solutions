"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getToken, clearToken, authHeaders, unwrap } from "@/lib/admin-auth";
import {
  type EmailStatus,
  type Enquiry,
  fmtDate,
  Spinner,
  StatusSelect,
  IconLogout,
  IconMail,
  IconRefresh,
  IconEye,
  IconClose,
  IconChevronLeft,
  IconChevronRight,
} from "./_shared";

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

interface ListResponse {
  items: Enquiry[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ─── Test Email Modal ──────────────────────────────────────────────────────

// Turn a FastAPI error body into a readable message. Handles the validation
// shape `{ detail: [{ loc, msg, ... }] }`, the simple `{ detail: "..." }`
// shape, and falls back to the HTTP status.
function formatError(data: unknown, status: number): string {
  const detail = (data as { detail?: unknown })?.detail;
  if (Array.isArray(detail)) {
    const msg = detail
      .map((d) => {
        const m = (d as { msg?: string; loc?: unknown[] })?.msg;
        const loc = (d as { loc?: unknown[] })?.loc;
        const field = Array.isArray(loc) ? loc.filter((p) => p !== "body").join(".") : "";
        return field ? `${field}: ${m}` : m;
      })
      .filter(Boolean)
      .join("; ");
    if (msg) return msg;
  }
  if (typeof detail === "string" && detail) return detail;
  const message = (data as { message?: unknown })?.message;
  if (typeof message === "string" && message) return message;
  return `Request failed (HTTP ${status}).`;
}

function TestEmailModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const handleSend = async () => {
    if (!email) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${API}/v1/admin/test-email`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ toAddress: email }),
      });
      const data = await res.json().catch(() => ({}));
      // Treat any `detail` payload as an error — FastAPI uses `{ detail: ... }`
      // for both validation (422) and raised HTTPExceptions, and the endpoint
      // can return it with a 200 status, so res.ok alone is not enough.
      if (res.ok && data?.detail == null) {
        setResult({ ok: true, msg: data.message ?? "Test email sent successfully." });
      } else {
        setResult({ ok: false, msg: formatError(data, res.status) });
      }
    } catch {
      setResult({ ok: false, msg: "Network error — could not reach the API server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 font-body">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#b31c33] font-bold block mb-0.5">
              Diagnostics
            </span>
            <h2 className="font-headline text-xl text-stone-900">Test Email</h2>
            <p className="text-xs text-stone-500 mt-1">
              Verify SMTP connectivity. Result returned immediately.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors shrink-0"
            aria-label="Close"
          >
            <IconClose />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="test-email-addr"
              className="block text-xs uppercase tracking-wider text-stone-600 font-semibold mb-1.5"
            >
              Recipient Email
            </label>
            <input
              id="test-email-addr"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
              placeholder="test@example.com"
              autoFocus
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm outline-none focus:border-[#b31c33]/70 focus:ring-2 focus:ring-[#b31c33]/10 transition-all placeholder:text-stone-400"
            />
          </div>

          {result && (
            <div
              className={`rounded-xl px-4 py-3 text-sm border flex items-start gap-2.5 ${
                result.ok
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-red-50 text-red-600 border-red-200"
              }`}
              role="status"
            >
              {result.ok ? (
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              )}
              <span className="leading-relaxed break-all">{result.msg}</span>
            </div>
          )}

          <button
            onClick={handleSend}
            disabled={loading || !email}
            className="w-full bg-gradient-to-br from-[#b31c33] to-[#d63849] text-white py-3 rounded-xl font-bold tracking-wide text-sm hover:shadow-lg shadow-sm shadow-[#b31c33]/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <><Spinner className="w-4 h-4" /> Sending…</>
            ) : (
              <><IconMail /> Send Test Email</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 px-4 py-3">
      <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">{label}</p>
      <p className={`text-2xl font-headline mt-0.5 ${accent ? "text-[#b31c33]" : "text-stone-900"}`}>
        {value}
      </p>
    </div>
  );
}

// ─── Main Dashboard ────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter();

  const [authChecked, setAuthChecked] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    total: 0,
    page_size: 20,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Filters
  const [enquirerFilter, setEnquirerFilter] = useState("");
  const [salesFilter, setSalesFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  // Per-row loading
  const [retryLoading, setRetryLoading] = useState<Record<number, boolean>>({});
  const [statusLoading, setStatusLoading] = useState<Record<number, boolean>>({});

  // Modals
  const [showTestEmail, setShowTestEmail] = useState(false);

  const fetchEnquiries = useCallback(
    async (page: number) => {
      setLoading(true);
      setFetchError(null);
      const params = new URLSearchParams({ page: String(page), page_size: "20" });
      if (enquirerFilter) params.set("enquirer_status", enquirerFilter);
      if (salesFilter) params.set("sales_status", salesFilter);
      if (countryFilter) params.set("country", countryFilter);

      try {
        const res = await fetch(`${API}/v1/admin/enquiries?${params}`, {
          headers: authHeaders(),
        });
        if (res.status === 401) {
          clearToken();
          router.replace("/admin/login");
          return;
        }
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const data = unwrap<ListResponse>(await res.json());
        setEnquiries(data.items ?? []);
        setPagination({
          page: data.page,
          pages: data.totalPages,
          total: data.total,
          page_size: data.pageSize,
        });
      } catch (err) {
        setFetchError(err instanceof Error ? err.message : "Failed to load enquiries.");
      } finally {
        setLoading(false);
      }
    },
    [enquirerFilter, salesFilter, countryFilter, router]
  );

  // Auth check on mount
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    setAuthChecked(true);
  }, [router]);

  // Fetch when ready or filters/page change
  useEffect(() => {
    if (!authChecked) return;
    void fetchEnquiries(currentPage);
  }, [authChecked, currentPage, fetchEnquiries]);

  // Refetch when the tab/window regains focus so edits made on the detail
  // page (or elsewhere) are reflected without a manual reload.
  useEffect(() => {
    if (!authChecked) return;
    const refresh = () => {
      if (document.visibilityState === "visible") void fetchEnquiries(currentPage);
    };
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [authChecked, currentPage, fetchEnquiries]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [enquirerFilter, salesFilter, countryFilter]);

  const handleStatusChange = async (
    id: number,
    field: "enquirerEmailStatus" | "salesEmailStatus",
    val: EmailStatus
  ) => {
    // Optimistic update
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, [field]: val } : e))
    );
    setStatusLoading((p) => ({ ...p, [id]: true }));
    try {
      const body =
        field === "enquirerEmailStatus"
          ? { enquirerEmailStatus: val }
          : { salesEmailStatus: val };
      const res = await fetch(`${API}/v1/admin/enquiries/${id}/status`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify(body),
      });
      if (res.status === 401) {
        clearToken();
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        // Revert optimistic update on failure
        void fetchEnquiries(currentPage);
      }
    } catch {
      void fetchEnquiries(currentPage);
    } finally {
      setStatusLoading((p) => ({ ...p, [id]: false }));
    }
  };

  const handleRetry = async (id: number) => {
    setRetryLoading((p) => ({ ...p, [id]: true }));
    try {
      const res = await fetch(`${API}/v1/admin/enquiries/${id}/retry-email`, {
        method: "POST",
        headers: authHeaders(),
      });
      if (res.status === 401) {
        clearToken();
        router.replace("/admin/login");
        return;
      }
      if (res.ok) {
        const detail = await fetch(`${API}/v1/admin/enquiries/${id}`, {
          headers: authHeaders(),
        });
        if (detail.ok) {
          const updated = unwrap<Enquiry>(await detail.json());
          setEnquiries((prev) => prev.map((e) => (e.id === id ? updated : e)));
        }
      }
    } finally {
      setRetryLoading((p) => ({ ...p, [id]: false }));
    }
  };

  const handleLogout = () => {
    clearToken();
    router.replace("/admin/login");
  };

  // Compute stats from current page
  const failedCount = enquiries.filter(
    (e) => e.enquirerEmailStatus === "failed" || e.salesEmailStatus === "failed"
  ).length;

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <Spinner className="w-8 h-8 text-[#b31c33]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-body">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="https://nextcloud.illumiasolutions.com/s/BoJ6wwwsN5ja8aR/download/Slide4_transparent-removebg-preview.png"
              alt="Illumia Solutions"
              width={120}
              height={36}
              priority
            />
            <div className="h-5 w-px bg-stone-200" aria-hidden="true" />
            <span className="text-sm font-semibold text-stone-600">Admin</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTestEmail(true)}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-stone-700 border border-stone-200 rounded-xl hover:bg-stone-50 hover:border-stone-300 active:scale-[0.98] transition-all"
            >
              <IconMail />
              <span className="hidden sm:inline">Test Email</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-stone-600 rounded-xl hover:bg-stone-100 active:scale-[0.98] transition-all"
            >
              <IconLogout />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────────────────── */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Page heading + stats */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <div>
            <h1 className="font-headline text-2xl text-stone-900">Enquiries</h1>
            <p className="text-sm text-stone-500 mt-0.5">
              Manage and respond to incoming contact enquiries.
            </p>
          </div>
          <button
            onClick={() => fetchEnquiries(currentPage)}
            disabled={loading}
            className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-stone-600 rounded-xl hover:bg-stone-100 disabled:opacity-40 transition-all"
          >
            <IconRefresh className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Total Enquiries" value={pagination.total} />
          <StatCard label="This Page" value={enquiries.length} />
          <StatCard
            label="Failed (this page)"
            value={failedCount}
            accent={failedCount > 0}
          />
          <StatCard label="Pages" value={pagination.pages} />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-stone-200 px-4 py-3 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold shrink-0">
            Filter
          </span>

          <select
            value={enquirerFilter}
            onChange={(e) => setEnquirerFilter(e.target.value)}
            className="text-sm border border-stone-200 rounded-xl px-3 py-1.5 outline-none focus:border-[#b31c33]/50 text-stone-700 bg-white"
          >
            <option value="">Enquirer status — all</option>
            <option value="pending">pending</option>
            <option value="sent">sent</option>
            <option value="partial">partial</option>
            <option value="failed">failed</option>
          </select>

          <select
            value={salesFilter}
            onChange={(e) => setSalesFilter(e.target.value)}
            className="text-sm border border-stone-200 rounded-xl px-3 py-1.5 outline-none focus:border-[#b31c33]/50 text-stone-700 bg-white"
          >
            <option value="">Sales status — all</option>
            <option value="pending">pending</option>
            <option value="sent">sent</option>
            <option value="partial">partial</option>
            <option value="failed">failed</option>
          </select>

          <input
            type="text"
            placeholder="Country…"
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="text-sm border border-stone-200 rounded-xl px-3 py-1.5 outline-none focus:border-[#b31c33]/50 text-stone-700 placeholder:text-stone-400 w-36"
          />

          {(enquirerFilter || salesFilter || countryFilter) && (
            <button
              onClick={() => {
                setEnquirerFilter("");
                setSalesFilter("");
                setCountryFilter("");
              }}
              className="text-xs text-[#b31c33] hover:underline font-medium ml-auto"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Error banner */}
        {fetchError && (
          <div
            role="alert"
            className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 flex items-center gap-2"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {fetchError}
          </div>
        )}

        {/* Table card */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          {loading ? (
            <div className="py-24 flex items-center justify-center text-stone-300">
              <Spinner className="w-8 h-8 text-[#b31c33]/40" />
            </div>
          ) : enquiries.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <IconMail />
              </div>
              <p className="font-headline text-lg text-stone-500">No enquiries found</p>
              <p className="text-sm text-stone-400 mt-1">
                {enquirerFilter || salesFilter || countryFilter
                  ? "Try adjusting the filters."
                  : "New enquiries will appear here."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[900px]">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50/80">
                    {[
                      "#",
                      "Contact",
                      "Email",
                      "Country",
                      "Service",
                      "Submitted",
                      "Enquirer Email",
                      "Sales Email",
                      "",
                    ].map((h, i) => (
                      <th
                        key={i}
                        className={`px-4 py-3 text-xs uppercase tracking-wider text-stone-400 font-semibold ${i === 8 ? "text-right" : "text-left"}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50">
                  {enquiries.map((enq) => {
                    const retryEnabled =
                      enq.enquirerEmailStatus === "failed" ||
                      enq.enquirerEmailStatus === "partial" ||
                      enq.salesEmailStatus === "failed" ||
                      enq.salesEmailStatus === "partial" ||
                      !!enq.enquirerEmailError ||
                      !!enq.salesEmailError;
                    const rowStatusBusy = !!statusLoading[enq.id];

                    return (
                      <tr
                        key={enq.id}
                        onClick={() => router.push(`/admin/enquiries?id=${enq.id}`)}
                        className="hover:bg-stone-50/60 transition-colors cursor-pointer"
                      >
                        {/* ID */}
                        <td className="px-4 py-3 text-stone-400 tabular-nums text-xs">
                          {enq.id}
                        </td>

                        {/* Contact */}
                        <td className="px-4 py-3">
                          <div className="font-medium text-stone-900 leading-tight">
                            {enq.fullName}
                          </div>
                          {enq.company && (
                            <div className="text-xs text-stone-500 mt-0.5">{enq.company}</div>
                          )}
                        </td>

                        {/* Email */}
                        <td className="px-4 py-3 text-stone-600 text-xs">{enq.emailAddress}</td>

                        {/* Country */}
                        <td className="px-4 py-3 text-stone-600 text-xs">{enq.country}</td>

                        {/* Service */}
                        <td
                          className="px-4 py-3 text-stone-600 text-xs max-w-[150px] truncate"
                          title={enq.howCanWeHelp}
                        >
                          {enq.howCanWeHelp}
                        </td>

                        {/* Submitted */}
                        <td className="px-4 py-3 text-stone-500 text-xs whitespace-nowrap">
                          {fmtDate(enq.createdAt)}
                        </td>

                        {/* Enquirer status */}
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <StatusSelect
                            status={enq.enquirerEmailStatus}
                            onChange={(v) =>
                              handleStatusChange(enq.id, "enquirerEmailStatus", v)
                            }
                            disabled={rowStatusBusy}
                          />
                        </td>

                        {/* Sales status */}
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <StatusSelect
                            status={enq.salesEmailStatus}
                            onChange={(v) =>
                              handleStatusChange(enq.id, "salesEmailStatus", v)
                            }
                            disabled={rowStatusBusy}
                          />
                        </td>

                        {/* Actions */}
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1">
                            {/* View */}
                            <button
                              onClick={() => router.push(`/admin/enquiries?id=${enq.id}`)}
                              title="View full details"
                              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                            >
                              <IconEye />
                            </button>
                            {/* Retry */}
                            <button
                              onClick={() => handleRetry(enq.id)}
                              disabled={!retryEnabled || !!retryLoading[enq.id]}
                              title={
                                retryEnabled
                                  ? "Retry failed email delivery"
                                  : "No failed emails to retry"
                              }
                              className={`p-1.5 rounded-lg transition-colors disabled:cursor-not-allowed ${
                                retryEnabled && !retryLoading[enq.id]
                                  ? "text-amber-600 hover:bg-amber-50"
                                  : "text-stone-200"
                              }`}
                            >
                              {retryLoading[enq.id] ? (
                                <Spinner className="w-4 h-4" />
                              ) : (
                                <IconRefresh />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && pagination.pages > 1 && (
          <div className="flex items-center justify-between gap-4 pt-1">
            <p className="text-sm text-stone-500">
              Page {pagination.page} of {pagination.pages} &middot; {pagination.total} total
            </p>
            <div className="flex items-center gap-1">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <IconChevronLeft />
              </button>

              {/* Page numbers — show window of 5 around current */}
              {(() => {
                const total = pagination.pages;
                const cur = currentPage;
                const start = Math.max(1, cur - 2);
                const end = Math.min(total, start + 4);
                return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`min-w-[2.25rem] h-9 rounded-xl text-sm font-medium border transition-all ${
                      p === currentPage
                        ? "bg-[#b31c33] text-white border-[#b31c33] shadow-sm shadow-[#b31c33]/20"
                        : "border-stone-200 text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {p}
                  </button>
                ));
              })()}

              <button
                disabled={currentPage >= pagination.pages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <IconChevronRight />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ── Modals ─────────────────────────────────────────────────────── */}
      {showTestEmail && <TestEmailModal onClose={() => setShowTestEmail(false)} />}
    </div>
  );
}
