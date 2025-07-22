// components/DialogCard.tsx
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  
  interface DialogCardProps {
    title: string;
    description?: string;
    content: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  export default function DialogCard({
    title,
    description,
    content,
    open,
    onOpenChange,
  }: DialogCardProps) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
  
          {/* SCROLLABLE BODY */}
          <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
            {content}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  