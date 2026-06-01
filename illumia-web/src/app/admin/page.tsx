"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getToken, clearToken, authHeaders } from "@/lib/admin-auth";

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

// ─── Types ─────────────────────────────────────────────────────────────────

type EmailStatus = "pending" | "sent" | "partial" | "failed";

interface Enquiry {
  id: number;
  fullName: string;
  company?: string | null;
  emailAddress: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  howCanWeHelp: string;
  message: string;
  enquirerEmailStatus: EmailStatus;
  salesEmailStatus: EmailStatus;
  enquirerEmailError?: string | null;
  salesEmailError?: string | null;
  createdAt?: string;
}

interface ListResponse {
  items: Enquiry[];
  total: number;
  page: number;
  page_size: number;
  pages: number;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function fmtDate(s?: string): string {
  if (!s) return "—";
  try {
    return new Date(s).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return s;
  }
}

// ─── Icons ─────────────────────────────────────────────────────────────────

function IconLogout() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconRefresh({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function Spinner({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

// ─── Status Badge ──────────────────────────────────────────────────────────

const STATUS_STYLES: Record<EmailStatus, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  sent: "bg-emerald-50 text-emerald-700 border-emerald-200",
  partial: "bg-blue-50 text-blue-700 border-blue-200",
  failed: "bg-red-50 text-red-600 border-red-200",
};

const STATUS_DOT: Record<EmailStatus, string> = {
  pending: "bg-amber-500",
  sent: "bg-emerald-500",
  partial: "bg-blue-500",
  failed: "bg-red-500",
};

function StatusBadge({ status }: { status: EmailStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_STYLES[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[status]}`} />
      {status}
    </span>
  );
}

// ─── Inline Status Select ──────────────────────────────────────────────────

function StatusSelect({
  status,
  onChange,
  disabled,
}: {
  status: EmailStatus;
  onChange: (s: EmailStatus) => void;
  disabled: boolean;
}) {
  return (
    <div className="relative inline-flex items-center">
      {disabled && (
        <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
          <Spinner className="w-3 h-3 text-stone-400" />
        </span>
      )}
      <select
        value={status}
        onChange={(e) => onChange(e.target.value as EmailStatus)}
        disabled={disabled}
        className={`appearance-none text-xs font-medium px-2.5 py-1 pr-7 rounded-full border outline-none cursor-pointer transition-opacity disabled:opacity-50 disabled:cursor-wait ${STATUS_STYLES[status]}`}
      >
        <option value="pending">pending</option>
        <option value="sent">sent</option>
        <option value="partial">partial</option>
        <option value="failed">failed</option>
      </select>
      {!disabled && (
        <svg className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      )}
    </div>
  );
}

// ─── Field ─────────────────────────────────────────────────────────────────

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-0.5">{label}</dt>
      <dd className="text-sm text-stone-800">{value || "—"}</dd>
    </div>
  );
}

// ─── Detail Modal ──────────────────────────────────────────────────────────

function DetailModal({
  enquiryId,
  enquiryBasic,
  onClose,
}: {
  enquiryId: number;
  enquiryBasic: Enquiry;
  onClose: () => void;
}) {
  const [enquiry, setEnquiry] = useState<Enquiry>(enquiryBasic);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API}/v1/admin/enquiries/${enquiryId}`, {
          headers: authHeaders(),
        });
        if (res.ok && !cancelled) setEnquiry(await res.json());
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [enquiryId]);

  const hasErrors = enquiry.enquirerEmailError || enquiry.salesEmailError;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 shrink-0">
          <div>
            <span className="text-xs font-body uppercase tracking-widest text-[#b31c33] font-bold block">
              Enquiry #{enquiry.id}
            </span>
            <h2 className="font-headline text-xl text-stone-900 leading-tight mt-0.5">
              {enquiry.fullName}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {loading && <Spinner className="w-4 h-4 text-stone-400" />}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
              aria-label="Close"
            >
              <IconClose />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="overflow-y-auto p-6 space-y-6 font-body">
          {/* Contact */}
          <section>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
              Contact Information
            </h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Field label="Full Name" value={enquiry.fullName} />
              <Field label="Company" value={enquiry.company ?? "—"} />
              <Field label="Email" value={enquiry.emailAddress} />
              <Field label="Phone" value={enquiry.phoneNumber} />
            </dl>
          </section>

          {/* Location */}
          <section>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
              Location
            </h3>
            <dl className="grid grid-cols-3 gap-x-6 gap-y-4">
              <Field label="City" value={enquiry.city} />
              <Field label="State" value={enquiry.state} />
              <Field label="Country" value={enquiry.country} />
            </dl>
          </section>

          {/* Enquiry detail */}
          <section>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
              Enquiry
            </h3>
            <dl className="space-y-3">
              <Field label="Service of Interest" value={enquiry.howCanWeHelp} />
              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1.5">Message</dt>
                <dd className="text-sm text-stone-700 bg-stone-50 rounded-xl p-4 border border-stone-100 leading-relaxed whitespace-pre-wrap">
                  {enquiry.message}
                </dd>
              </div>
            </dl>
          </section>

          {/* Email status */}
          <section>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
              Email Status
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {/* Enquirer email */}
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                  Enquirer Email
                </p>
                <StatusBadge status={enquiry.enquirerEmailStatus} />
                {enquiry.enquirerEmailError && (
                  <div className="mt-3 bg-red-50 border border-red-200 rounded-xl p-3">
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1.5">
                      Error Detail
                    </p>
                    <pre className="text-xs text-red-700 whitespace-pre-wrap break-all font-mono leading-relaxed">
                      {enquiry.enquirerEmailError}
                    </pre>
                  </div>
                )}
              </div>
              {/* Sales email */}
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                  Sales Email
                </p>
                <StatusBadge status={enquiry.salesEmailStatus} />
                {enquiry.salesEmailError && (
                  <div className="mt-3 bg-red-50 border border-red-200 rounded-xl p-3">
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1.5">
                      Error Detail
                    </p>
                    <pre className="text-xs text-red-700 whitespace-pre-wrap break-all font-mono leading-relaxed">
                      {enquiry.salesEmailError}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            {!hasErrors && (
              <p className="text-xs text-stone-400 mt-3">No errors recorded for this enquiry.</p>
            )}
          </section>

          {/* Metadata */}
          <section className="border-t border-stone-100 pt-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Field label="Enquiry ID" value={`#${enquiry.id}`} />
              <Field label="Submitted" value={fmtDate(enquiry.createdAt)} />
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}

// ─── Test Email Modal ──────────────────────────────────────────────────────

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
      if (res.ok) {
        setResult({ ok: true, msg: data.message ?? data.detail ?? "Test email sent successfully." });
      } else {
        setResult({
          ok: false,
          msg: typeof data.detail === "string"
            ? data.detail
            : JSON.stringify(data.detail ?? data) || `Error ${res.status}`,
        });
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
  const [detailTarget, setDetailTarget] = useState<Enquiry | null>(null);
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
        const data: ListResponse = await res.json();
        setEnquiries(data.items ?? []);
        setPagination({
          page: data.page,
          pages: data.pages,
          total: data.total,
          page_size: data.page_size,
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
          const updated: Enquiry = await detail.json();
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
                        className="hover:bg-stone-50/60 transition-colors"
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
                        <td className="px-4 py-3">
                          <StatusSelect
                            status={enq.enquirerEmailStatus}
                            onChange={(v) =>
                              handleStatusChange(enq.id, "enquirerEmailStatus", v)
                            }
                            disabled={rowStatusBusy}
                          />
                        </td>

                        {/* Sales status */}
                        <td className="px-4 py-3">
                          <StatusSelect
                            status={enq.salesEmailStatus}
                            onChange={(v) =>
                              handleStatusChange(enq.id, "salesEmailStatus", v)
                            }
                            disabled={rowStatusBusy}
                          />
                        </td>

                        {/* Actions */}
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            {/* View */}
                            <button
                              onClick={() => setDetailTarget(enq)}
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
      {detailTarget && (
        <DetailModal
          enquiryId={detailTarget.id}
          enquiryBasic={detailTarget}
          onClose={() => setDetailTarget(null)}
        />
      )}
      {showTestEmail && <TestEmailModal onClose={() => setShowTestEmail(false)} />}
    </div>
  );
}
