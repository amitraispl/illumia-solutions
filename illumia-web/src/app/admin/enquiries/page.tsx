"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { getToken, clearToken, authHeaders, unwrap } from "@/lib/admin-auth";
import {
  type EmailStatus,
  type Enquiry,
  fmtDate,
  Spinner,
  StatusSelect,
  StatusBadge,
  Field,
  IconChevronLeft,
  IconRefresh,
  IconLogout,
} from "../_shared";

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

function EnquiryDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const [authChecked, setAuthChecked] = useState(false);
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusBusy, setStatusBusy] = useState(false);
  const [retryBusy, setRetryBusy] = useState(false);

  // Auth gate
  useEffect(() => {
    if (!getToken()) {
      router.replace("/admin/login");
      return;
    }
    setAuthChecked(true);
  }, [router]);

  const fetchEnquiry = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/v1/admin/enquiries/${id}`, {
        headers: authHeaders(),
      });
      if (res.status === 401) {
        clearToken();
        router.replace("/admin/login");
        return;
      }
      if (res.status === 404) {
        setError("Enquiry not found.");
        return;
      }
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setEnquiry(unwrap<Enquiry>(await res.json()));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load enquiry.");
    } finally {
      setLoading(false);
    }
  }, [id, router]);

  useEffect(() => {
    if (!authChecked) return;
    if (Number.isNaN(id) || id <= 0) {
      setError("No enquiry selected.");
      setLoading(false);
      return;
    }
    void fetchEnquiry();
  }, [authChecked, id, fetchEnquiry]);

  const handleStatusChange = async (
    field: "enquirerEmailStatus" | "salesEmailStatus",
    val: EmailStatus
  ) => {
    if (!enquiry) return;
    const prev = enquiry;
    setEnquiry({ ...enquiry, [field]: val }); // optimistic
    setStatusBusy(true);
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
      if (!res.ok) setEnquiry(prev); // revert
    } catch {
      setEnquiry(prev);
    } finally {
      setStatusBusy(false);
    }
  };

  const handleRetry = async () => {
    setRetryBusy(true);
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
      if (res.ok) await fetchEnquiry();
    } finally {
      setRetryBusy(false);
    }
  };

  const handleLogout = () => {
    clearToken();
    router.replace("/admin/login");
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <Spinner className="w-8 h-8 text-[#b31c33]" />
      </div>
    );
  }

  const retryEnabled =
    !!enquiry &&
    (enquiry.enquirerEmailStatus === "failed" ||
      enquiry.enquirerEmailStatus === "partial" ||
      enquiry.salesEmailStatus === "failed" ||
      enquiry.salesEmailStatus === "partial" ||
      !!enquiry.enquirerEmailError ||
      !!enquiry.salesEmailError);

  return (
    <div className="min-h-screen bg-stone-50 font-body">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
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
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-stone-600 rounded-xl hover:bg-stone-100 active:scale-[0.98] transition-all"
          >
            <IconLogout />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Back */}
        <button
          onClick={() => router.push("/admin")}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          <IconChevronLeft />
          Back to enquiries
        </button>

        {loading ? (
          <div className="py-24 flex items-center justify-center">
            <Spinner className="w-8 h-8 text-[#b31c33]/40" />
          </div>
        ) : error ? (
          <div
            role="alert"
            className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 flex items-center gap-2"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        ) : enquiry ? (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm">
            {/* Card header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-stone-100 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#b31c33] font-bold block">
                  Enquiry #{enquiry.id}
                  {enquiry.referenceNumber && (
                    <span className="text-stone-400 font-medium ml-2 tracking-normal normal-case">
                      {enquiry.referenceNumber}
                    </span>
                  )}
                </span>
                <h1 className="font-headline text-2xl text-stone-900 leading-tight mt-0.5">
                  {enquiry.fullName}
                </h1>
              </div>
              <button
                onClick={handleRetry}
                disabled={!retryEnabled || retryBusy}
                title={
                  retryEnabled
                    ? "Retry failed email delivery"
                    : "No failed emails to retry"
                }
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl border transition-all disabled:cursor-not-allowed ${
                  retryEnabled && !retryBusy
                    ? "text-amber-700 border-amber-200 hover:bg-amber-50"
                    : "text-stone-300 border-stone-200"
                }`}
              >
                {retryBusy ? <Spinner className="w-4 h-4" /> : <IconRefresh />}
                Retry email
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
                  Contact Information
                </h2>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <Field label="Full Name" value={enquiry.fullName} />
                  <Field label="Company" value={enquiry.company ?? "—"} />
                  <Field label="Email" value={enquiry.emailAddress} />
                  <Field label="Phone" value={enquiry.phoneNumber} />
                </dl>
              </section>

              {/* Location */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
                  Location
                </h2>
                <dl className="grid grid-cols-3 gap-x-6 gap-y-4">
                  <Field label="City" value={enquiry.city} />
                  <Field label="State" value={enquiry.state} />
                  <Field label="Country" value={enquiry.country} />
                </dl>
              </section>

              {/* Enquiry */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
                  Enquiry
                </h2>
                <dl className="space-y-3">
                  <Field label="Service of Interest" value={enquiry.howCanWeHelp} />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1.5">
                      Message
                    </dt>
                    <dd className="text-sm text-stone-700 bg-stone-50 rounded-xl p-4 border border-stone-100 leading-relaxed whitespace-pre-wrap">
                      {enquiry.message}
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Email status — editable */}
              <section>
                <h2 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 border-b border-stone-100 pb-2">
                  Email Status
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Enquirer */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Enquirer Email
                    </p>
                    <StatusSelect
                      status={enquiry.enquirerEmailStatus}
                      onChange={(v) => handleStatusChange("enquirerEmailStatus", v)}
                      disabled={statusBusy}
                    />
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
                  {/* Sales */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Sales Email
                    </p>
                    <StatusSelect
                      status={enquiry.salesEmailStatus}
                      onChange={(v) => handleStatusChange("salesEmailStatus", v)}
                      disabled={statusBusy}
                    />
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
                {enquiry.overallStatus && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Overall
                    </span>
                    <StatusBadge status={enquiry.overallStatus as EmailStatus} />
                  </div>
                )}
              </section>

              {/* Metadata */}
              <section className="border-t border-stone-100 pt-4">
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <Field label="Submitted" value={fmtDate(enquiry.createdAt)} />
                  <Field label="Last Updated" value={fmtDate(enquiry.updatedAt)} />
                </dl>
              </section>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default function EnquiryDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-stone-50">
          <Spinner className="w-8 h-8 text-[#b31c33]" />
        </div>
      }
    >
      <EnquiryDetail />
    </Suspense>
  );
}
