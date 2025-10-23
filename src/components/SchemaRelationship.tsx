interface RelationshipProps {
  type: 'one-to-one' | 'one-to-many' | 'many-to-many';
  from: string;
  to: string;
}

export function SchemaRelationship({ type, from, to }: RelationshipProps) {
  const getRelationshipSymbol = () => {
    switch (type) {
      case 'one-to-one':
        return '1:1';
      case 'one-to-many':
        return '1:N';
      case 'many-to-many':
        return 'N:M';
    }
  };

  return (
    <div className="flex items-center gap-2 text-muted-foreground py-1">
      <span className="text-[11px]">{from}</span>
      <div className="flex items-center gap-1">
        <div className="h-[1px] w-8 bg-border"></div>
        <span className="bg-muted px-2 py-0.5 rounded text-[10px]">
          {getRelationshipSymbol()}
        </span>
        <div className="h-[1px] w-8 bg-border"></div>
      </div>
      <span className="text-[11px]">{to}</span>
    </div>
  );
}
