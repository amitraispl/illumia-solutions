"use client";

// Shared types, helpers, and presentational components for the admin area.

// ─── Types ─────────────────────────────────────────────────────────────────

export type EmailStatus = "pending" | "sent" | "partial" | "failed";

export interface Enquiry {
  id: number;
  referenceNumber?: string;
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
  overallStatus?: string;
  createdAt?: string;
  updatedAt?: string;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

export function fmtDate(s?: string): string {
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

export function IconLogout() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

export function IconRefresh({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

export function IconEye() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function IconChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

export function IconChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

export function Spinner({ className = "w-5 h-5" }: { className?: string }) {
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

export function StatusBadge({ status }: { status: EmailStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_STYLES[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[status]}`} />
      {status}
    </span>
  );
}

// ─── Inline Status Select ──────────────────────────────────────────────────

export function StatusSelect({
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

export function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-0.5">{label}</dt>
      <dd className="text-sm text-stone-800">{value || "—"}</dd>
    </div>
  );
}
