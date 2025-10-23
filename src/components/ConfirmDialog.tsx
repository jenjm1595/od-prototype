interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-card rounded-[3px] w-[500px] flex flex-col shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="bg-[#f4f5f6] rounded-tl-[3px] rounded-tr-[3px] px-4 py-3 flex items-start justify-between gap-2">
          <h3 className="flex-1">{title}</h3>
        </div>

        {/* Content */}
        <div className="bg-white p-4">
          <p className="leading-relaxed">{message}</p>
        </div>

        {/* Footer bar */}
        <div className="bg-[#f4f5f6] rounded-bl-[3px] rounded-br-[3px] px-4 py-2 flex items-center justify-end gap-2">
          <button
            onClick={onCancel}
            className="bg-white border border-border rounded-[3px] px-[9px] py-[5px] hover:bg-muted"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-primary text-primary-foreground border border-primary rounded-[3px] px-2 py-1 hover:opacity-90"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
