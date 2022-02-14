interface DialogProps {
    destroy: FunctionType;
  }
  
  interface DialogCallback {
    destroy: FunctionType;
  }
  
  interface FormattedEvent extends Model.Event {
    createdAtStr: string;
    deletedAtStr?: string;
  }
  