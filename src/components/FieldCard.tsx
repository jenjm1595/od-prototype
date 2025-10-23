import { GripVertical, Edit, Trash2, Link2, Key } from "lucide-react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";

interface Field {
  id: string;
  name: string;
  devName: string;
  type: string;
  required: boolean;
  hasData: boolean;
  default?: string;
  options?: string[];
  expression?: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  isSystemGenerated?: boolean;
}

interface FieldCardProps {
  field: Field;
  index: number;
  moveField: (dragIndex: number, hoverIndex: number) => void;
  onEdit: () => void;
  onDelete: () => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export function FieldCard({ field, index, moveField, onEdit, onDelete }: FieldCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const getTypeBadge = () => {
    if (field.type === 'value_list') return 'Value list';
    if (field.type === 'foreign_key') return 'Foreign key';
    // Legacy field types - for backwards compatibility
    if (field.type === 'decimal') return 'Number';
    if (field.type === 'integer') return 'Number';
    if (field.type === 'string') return 'Text';
    if (field.type === 'single_select') return 'Value list';
    if (field.type === 'multi_select') return 'Value list';
    return field.type.charAt(0).toUpperCase() + field.type.slice(1);
  };

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: 'field',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveField(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'field',
    item: () => {
      return { id: field.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  preview(drop(ref));

  return (
    <div 
      ref={ref} 
      data-handler-id={handlerId}
      className="group relative rounded-[4px] border border-border bg-card hover:bg-muted/50 transition-colors"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="flex items-center gap-4 p-5">
        {/* Drag Handle */}
        <div 
          ref={drag}
          className="text-muted-foreground cursor-move"
        >
          <GripVertical className="w-6 h-6" />
        </div>

        {/* Field Info - Left Column */}
        <div className="flex flex-col gap-0 min-w-[200px]">
          <p className="text-foreground">{field.name}</p>
          <p className="text-foreground">
            {field.isSystemGenerated ? 'System generated' : (field.required ? 'Required' : 'Optional')}
          </p>
        </div>

        {/* Badges - Middle Column */}
        <div className="flex-1 flex items-center gap-2">
          {field.isForeignKey && (
            <div className="bg-badge-foreign-key-background rounded-[14px] px-2 py-0 flex items-center gap-0.5">
              <Link2 className="w-[18px] h-[18px] text-badge-foreign-key-foreground" />
              <p className="text-badge-foreign-key-foreground">Foreign key</p>
            </div>
          )}
          
          {field.isPrimaryKey && (
            <div className="bg-badge-primary-key-background rounded-[14px] px-2 py-0 flex items-center gap-0.5">
              <Key className="w-[18px] h-[18px] text-badge-primary-key-foreground" />
              <p className="text-badge-primary-key-foreground">Primary key</p>
            </div>
          )}

          {!field.isPrimaryKey && !field.isForeignKey && (
            <div className="bg-muted rounded-[14px] px-2 py-0">
              <p className="text-foreground">{getTypeBadge()}</p>
            </div>
          )}
        </div>

        {/* Actions - Right Column */}
        <div className="flex items-center justify-end gap-2 w-[202px]">
          <button
            onClick={onEdit}
            className="p-1 hover:bg-muted rounded transition-opacity opacity-0 group-hover:opacity-100"
            aria-label="Edit field"
          >
            <Edit className="w-5 h-5 text-muted-foreground hover:text-sidebar-accent" />
          </button>
          <button
            onClick={onDelete}
            className="p-1 hover:bg-muted rounded transition-opacity opacity-0 group-hover:opacity-100"
            aria-label="Delete field"
          >
            <Trash2 className="w-5 h-5 text-muted-foreground hover:text-destructive" />
          </button>
        </div>
      </div>
    </div>
  );
}
