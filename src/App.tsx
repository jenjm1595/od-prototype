import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TableNavigationPanel } from "./components/TableNavigationPanel";
import { DetailPanel } from "./components/DetailPanel";
import { FieldModal } from "./components/FieldModal";
import { TableModal } from "./components/TableModal";
import { PopulateTableModal } from "./components/PopulateTableModal";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { DataImportWizard } from "./components/DataImportWizard";
import ImportDataPage from "./imports/Page";
import Frame812143 from "./imports/Frame812143";

interface Field {
  id: string;
  name: string;
  devName: string;
  type: string;
  required: boolean;
  hasData: boolean;
  isActive?: boolean;
  default?: string;
  options?: string[];
  expression?: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  foreignKeyReference?: string;
  keyValueTableId?: string;
  isSystemGenerated?: boolean;
  valueListSource?: "manual" | "key_value";
  linkedKeyValueTable?: string;
}

interface Table {
  id: string;
  name: string;
  devName: string;
  parent: string | null;
  relationship: string | null;
  fields: Field[];
  children: string[];
  hasData: boolean;
  isActive?: boolean;
  isGroup?: boolean;
  isKeyValue?: boolean;
  keyValueFieldType?: string;
  uploadedData?: any[][];
}

const initialSchema: Record<string, Table> = {
  company: {
    id: 'company',
    name: 'Company',
    devName: 'company',
    parent: null,
    relationship: null,
    fields: [
      { id: 'company_id', name: 'Company ID', devName: 'company_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'bvd_id', name: 'BvD ID', devName: 'bvd_id', type: 'string', required: true, hasData: true, isForeignKey: true },
      { id: 'company_name', name: 'Company Name', devName: 'company_name', type: 'string', required: true, hasData: true },
      { id: 'hq_location', name: 'Headquarters Location', devName: 'hq_location', type: 'string', required: false, default: 'Unknown', hasData: true },
      { id: 'employee_count', name: 'Employee Count', devName: 'employee_count', type: 'integer', required: false, hasData: true },
      { id: 'ultimate_owner', name: 'Ultimate Owner', devName: 'ultimate_owner', type: 'string', required: false, hasData: true }
    ],
    children: ['business_unit', 'contact', 'legacy_data'],
    hasData: true
  },
  individual: {
    id: 'individual',
    name: 'Individual',
    devName: 'individual',
    parent: null,
    relationship: null,
    fields: [
      { id: 'individual_id_pk', name: 'Individual ID', devName: 'individual_id_pk', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'individual_id', name: 'Individual ID', devName: 'individual_id', type: 'string', required: true, hasData: true, isForeignKey: true },
      { id: 'first_name', name: 'First Name', devName: 'first_name', type: 'string', required: true, hasData: true },
      { id: 'last_name', name: 'Last Name', devName: 'last_name', type: 'string', required: true, hasData: true },
      { id: 'date_of_birth', name: 'Date of Birth', devName: 'date_of_birth', type: 'date', required: false, hasData: true },
      { id: 'nationality', name: 'Nationality', devName: 'nationality', type: 'string', required: false, hasData: true }
    ],
    children: ['address', 'employment'],
    hasData: true
  },
  address: {
    id: 'address',
    name: 'Address',
    devName: 'address',
    parent: 'individual',
    relationship: 'one_to_many',
    fields: [
      { id: 'individual_id', name: 'Individual ID', devName: 'individual_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'individual.individual_id_pk', isSystemGenerated: true },
      { id: 'address_id', name: 'Address ID', devName: 'address_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'street', name: 'Street Address', devName: 'street', type: 'string', required: true, hasData: true },
      { id: 'city', name: 'City', devName: 'city', type: 'string', required: true, hasData: true },
      { id: 'state', name: 'State/Province', devName: 'state', type: 'string', required: false, hasData: true },
      { id: 'postal_code', name: 'Postal Code', devName: 'postal_code', type: 'string', required: true, hasData: true },
      { id: 'country', name: 'Country', devName: 'country', type: 'string', required: true, hasData: true },
      { id: 'address_type', name: 'Address Type', devName: 'address_type', type: 'single_select', required: false, options: ['Home', 'Work', 'Mailing', 'Other'], default: 'Home', hasData: true }
    ],
    children: [],
    hasData: true
  },
  employment: {
    id: 'employment',
    name: 'Employment',
    devName: 'employment',
    parent: 'individual',
    relationship: 'one_to_many',
    fields: [
      { id: 'employment_id', name: 'Employment ID', devName: 'employment_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'employer_name', name: 'Employer Name', devName: 'employer_name', type: 'string', required: true, hasData: true },
      { id: 'job_title', name: 'Job Title', devName: 'job_title', type: 'string', required: true, hasData: true },
      { id: 'start_date', name: 'Start Date', devName: 'start_date', type: 'date', required: true, hasData: true },
      { id: 'end_date', name: 'End Date', devName: 'end_date', type: 'date', required: false, hasData: true },
      { id: 'employment_type', name: 'Employment Type', devName: 'employment_type', type: 'single_select', required: false, options: ['Full-time', 'Part-time', 'Contract', 'Freelance'], default: 'Full-time', hasData: true }
    ],
    children: [],
    hasData: true
  },
  key_value: {
    id: 'key_value',
    name: 'Key-value tables',
    devName: 'key_value',
    parent: null,
    relationship: null,
    fields: [],
    children: ['metadata', 'low_risk_countries', 'test_2'],
    hasData: false,
    isGroup: true
  },
  metadata: {
    id: 'metadata',
    name: 'Metadata',
    devName: 'metadata',
    parent: 'key_value',
    relationship: 'one_to_many',
    fields: [],
    children: [],
    hasData: true,
    isKeyValue: true,
    keyValueFieldType: 'values_and_identifiers',
    uploadedData: [
      ['ID', 'Label'],
      ['schema_version', 'v3.2.0'],
      ['last_updated', '2025-01-15'],
      ['created_by', 'System Administrator'],
      ['environment', 'Production'],
      ['data_classification', 'Internal']
    ]
  },
  low_risk_countries: {
    id: 'low_risk_countries',
    name: 'Low Risk Countries',
    devName: 'low_risk_countries',
    parent: 'key_value',
    relationship: 'one_to_many',
    fields: [],
    children: [],
    hasData: true,
    isKeyValue: true,
    keyValueFieldType: 'values_only',
    uploadedData: [
      ['Canada'],
      ['United Kingdom'],
      ['Germany'],
      ['Australia'],
      ['Switzerland'],
      ['Netherlands'],
      ['Sweden'],
      ['Norway'],
      ['Denmark'],
      ['New Zealand']
    ]
  },
  test_2: {
    id: 'test_2',
    name: 'test 2',
    devName: 'test_2',
    parent: 'key_value',
    relationship: 'one_to_many',
    fields: [],
    children: [],
    hasData: false,
    isKeyValue: true,
    keyValueFieldType: 'values_only'
  },
  business_unit: {
    id: 'business_unit',
    name: 'Business Unit',
    devName: 'business_unit',
    parent: 'company',
    relationship: 'one_to_many',
    fields: [
      { id: 'company_id', name: 'Company ID', devName: 'company_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'company.company_id', isSystemGenerated: true },
      { id: 'business_unit_id', name: 'Business Unit ID', devName: 'business_unit_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'bvd_id', name: 'BvD ID', devName: 'bvd_id', type: 'string', required: true, hasData: true, isForeignKey: true },
      { id: 'bu_name', name: 'Business unit name', devName: 'bu_name', type: 'string', required: true, hasData: true },
      { id: 'bu_revenue', name: 'Annual revenue', devName: 'bu_revenue', type: 'decimal', required: false, hasData: true },
      { id: 'bu_region', name: 'Operating region', devName: 'bu_region', type: 'single_select', required: false, options: ['EMEA', 'Americas', 'APAC', 'Global'], default: 'Unknown', hasData: true }
    ],
    children: ['product'],
    hasData: true
  },
  product: {
    id: 'product',
    name: 'Product',
    devName: 'product',
    parent: 'business_unit',
    relationship: 'one_to_many',
    fields: [
      { id: 'business_unit_id', name: 'Business Unit ID', devName: 'business_unit_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'business_unit.business_unit_id', isSystemGenerated: true },
      { id: 'product_id', name: 'Product ID', devName: 'product_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'product_name', name: 'Product Name', devName: 'product_name', type: 'string', required: true, hasData: true },
      { id: 'product_code', name: 'Product Code', devName: 'product_code', type: 'string', required: true, hasData: true },
      { id: 'product_category', name: 'Product Category', devName: 'product_category', type: 'single_select', required: false, options: ['Consumables', 'Durables', 'Services', 'Raw Materials'], default: 'Consumables', hasData: true }
    ],
    children: ['purchase'],
    hasData: true
  },
  purchase: {
    id: 'purchase',
    name: 'Purchase',
    devName: 'purchase',
    parent: 'product',
    relationship: 'one_to_many',
    fields: [
      { id: 'product_id', name: 'Product ID', devName: 'product_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'product.product_id', isSystemGenerated: true },
      { id: 'purchase_id', name: 'Purchase ID', devName: 'purchase_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'purchase_date', name: 'Purchase Date', devName: 'purchase_date', type: 'date', required: true, hasData: true },
      { id: 'quantity', name: 'Quantity', devName: 'quantity', type: 'decimal', required: true, hasData: true },
      { id: 'unit_price', name: 'Unit Price', devName: 'unit_price', type: 'decimal', required: true, hasData: true },
      { id: 'currency', name: 'Currency', devName: 'currency', type: 'string', required: true, default: 'USD', hasData: true },
      { id: 'total_amount', name: 'Total Amount', devName: 'total_amount', type: 'decimal', required: true, hasData: true }
    ],
    children: ['invoice'],
    hasData: true
  },
  invoice: {
    id: 'invoice',
    name: 'Invoice',
    devName: 'invoice',
    parent: 'purchase',
    relationship: 'many_to_many',
    fields: [
      { id: 'purchase_id', name: 'Purchase ID', devName: 'purchase_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'purchase.purchase_id', isSystemGenerated: true },
      { id: 'invoice_id', name: 'Invoice ID', devName: 'invoice_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'invoice_number', name: 'Invoice Number', devName: 'invoice_number', type: 'string', required: true, hasData: true },
      { id: 'invoice_date', name: 'Invoice Date', devName: 'invoice_date', type: 'date', required: true, hasData: true },
      { id: 'invoice_amount', name: 'Invoice Amount', devName: 'invoice_amount', type: 'decimal', required: true, hasData: true },
      { id: 'outstanding_balance', name: 'Outstanding Balance', devName: 'outstanding_balance', type: 'decimal', required: true, hasData: true }
    ],
    children: ['payment'],
    hasData: true
  },
  payment: {
    id: 'payment',
    name: 'Payment',
    devName: 'payment',
    parent: 'invoice',
    relationship: 'one_to_many',
    fields: [
      { id: 'invoice_id', name: 'Invoice ID', devName: 'invoice_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'invoice.invoice_id', isSystemGenerated: true },
      { id: 'payment_id', name: 'Payment ID', devName: 'payment_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'payment_date', name: 'Payment Date', devName: 'payment_date', type: 'date', required: true, hasData: true },
      { id: 'payment_amount', name: 'Payment Amount', devName: 'payment_amount', type: 'decimal', required: true, hasData: true },
      { id: 'payment_method', name: 'Payment Method', devName: 'payment_method', type: 'single_select', required: false, options: ['Bank Transfer', 'Credit Card', 'Check', 'Wire'], default: 'Bank Transfer', hasData: true }
    ],
    children: [],
    hasData: true
  },
  contact: {
    id: 'contact',
    name: 'Contact',
    devName: 'contact',
    parent: 'company',
    relationship: 'one_to_many',
    fields: [
      { id: 'company_id', name: 'Company ID', devName: 'company_id', type: 'foreign_key', required: true, hasData: false, isForeignKey: true, foreignKeyReference: 'company.company_id', isSystemGenerated: true },
      { id: 'contact_id', name: 'Contact ID', devName: 'contact_id', type: 'primary_key', required: true, hasData: false, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'contact_name', name: 'Contact Name', devName: 'contact_name', type: 'string', required: true, hasData: false },
      { id: 'email', name: 'Email', devName: 'email', type: 'string', required: true, hasData: false },
      { id: 'phone', name: 'Phone', devName: 'phone', type: 'string', required: false, hasData: false },
      { id: 'role', name: 'Role', devName: 'role', type: 'string', required: false, hasData: false }
    ],
    children: [],
    hasData: false
  },
  legacy_data: {
    id: 'legacy_data',
    name: 'Legacy Data',
    devName: 'legacy_data',
    parent: 'company',
    relationship: 'one_to_many',
    fields: [
      { id: 'company_id', name: 'Company ID', devName: 'company_id', type: 'foreign_key', required: true, hasData: true, isForeignKey: true, foreignKeyReference: 'company.company_id', isSystemGenerated: true },
      { id: 'legacy_data_id', name: 'Legacy Data ID', devName: 'legacy_data_id', type: 'primary_key', required: true, hasData: true, isPrimaryKey: true, default: 'System generated', isSystemGenerated: true },
      { id: 'legacy_id', name: 'Legacy ID', devName: 'legacy_id', type: 'string', required: true, hasData: true },
      { id: 'legacy_value', name: 'Legacy Value', devName: 'legacy_value', type: 'string', required: false, hasData: true }
    ],
    children: [],
    hasData: true,
    isActive: false
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"views" | "reports" | "users" | "configuration">("configuration");
  const [sidebarActive, setSidebarActive] = useState("schema");
  const [tables, setTables] = useState<Record<string, Table>>(initialSchema);
  const [selectedTable, setSelectedTable] = useState<string | null>('company');
  const [showFieldModal, setShowFieldModal] = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);
  const [showPopulateModal, setShowPopulateModal] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [wizardFile, setWizardFile] = useState<File | null>(null);
  const [fieldModalMode, setFieldModalMode] = useState<'create' | 'edit'>('create');
  const [tableModalMode, setTableModalMode] = useState<'create' | 'edit'>('create');
  const [editingField, setEditingField] = useState<{ field: Field; tableId: string } | null>(null);
  const [editingTable, setEditingTable] = useState<Table | null>(null);
  const [populatingTableId, setPopulatingTableId] = useState<string | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  const handleCreateField = () => {
    setFieldModalMode('create');
    setEditingField(null);
    setShowFieldModal(true);
  };

  const handleEditField = (fieldId: string, tableId: string) => {
    const table = tables[tableId];
    const field = table?.fields.find((f) => f.id === fieldId);
    if (field) {
      setFieldModalMode('edit');
      setEditingField({ field, tableId });
      setShowFieldModal(true);
    }
  };

  const handleSaveField = (fieldData: Field, tableId: string) => {
    setTables((prev) => {
      const newTables = { ...prev };
      const table = newTables[tableId];

      if (fieldModalMode === 'edit' && editingField) {
        // Update existing field
        const fieldIndex = table.fields.findIndex((f) => f.id === editingField.field.id);
        if (fieldIndex !== -1) {
          table.fields[fieldIndex] = { ...fieldData };
        }
      } else {
        // Add new field
        table.fields = [...table.fields, fieldData];
      }

      return newTables;
    });

    setShowFieldModal(false);
    setEditingField(null);
  };

  const handleCreateTable = () => {
    setTableModalMode('create');
    setEditingTable(null);
    setShowTableModal(true);
  };

  const handleEditTable = (tableId: string) => {
    const table = tables[tableId];
    if (table) {
      setTableModalMode('edit');
      setEditingTable(table);
      setShowTableModal(true);
    }
  };

  const handleSaveTable = (tableData: any) => {
    if (tableModalMode === 'edit' && editingTable) {
      // Update existing table
      setTables((prev) => {
        const updatedTable: any = {
          ...prev[editingTable.id],
          name: tableData.name,
          devName: tableData.devName,
        };
        
        // Update keyValueFieldType if it's a key-value table
        if (tableData.keyValueFieldType !== undefined) {
          updatedTable.keyValueFieldType = tableData.keyValueFieldType;
          
          // Update the header row based on the new field type
          if (updatedTable.uploadedData && updatedTable.uploadedData.length > 0) {
            const currentData = [...updatedTable.uploadedData];
            
            if (tableData.keyValueFieldType === 'values_only') {
              // Convert to values_only format - remove identifier column
              updatedTable.uploadedData = currentData.map((row, index) => {
                if (index === 0) return [row[0] === 'ID' || row[0] === 'Identifier' ? 'Value' : row[0]];
                return [row[0]];
              });
            } else if (tableData.keyValueFieldType === 'values_and_identifiers') {
              // Convert to values_and_identifiers format
              if (currentData[0].length === 1) {
                // Currently values_only, add identifier column
                updatedTable.uploadedData = currentData.map((row, index) => {
                  if (index === 0) return ['ID', 'Label'];
                  return ['', row[0]];
                });
              } else {
                // Already has multiple columns, just update headers
                updatedTable.uploadedData = currentData.map((row, index) => {
                  if (index === 0) return ['ID', 'Label'];
                  return row;
                });
              }
            } else if (tableData.keyValueFieldType === 'values_hierarchical_identifiers') {
              // Convert to hierarchical format
              if (currentData[0].length === 1) {
                // Currently values_only, add columns
                updatedTable.uploadedData = currentData.map((row, index) => {
                  if (index === 0) return ['ID', 'Parent ID', 'Label'];
                  return ['', '', row[0]];
                });
              } else if (currentData[0].length === 2) {
                // Currently values_and_identifiers, add parent column
                updatedTable.uploadedData = currentData.map((row, index) => {
                  if (index === 0) return ['ID', 'Parent ID', 'Label'];
                  return [row[0], '', row[1]];
                });
              } else {
                // Already has 3+ columns, just update headers
                updatedTable.uploadedData = currentData.map((row, index) => {
                  if (index === 0) return ['ID', 'Parent ID', 'Label'];
                  return row;
                });
              }
            }
          }
        }
        
        return {
          ...prev,
          [editingTable.id]: updatedTable,
        };
      });
    } else {
      // Create new table
      const tableId = tableData.devName.toLowerCase().replace(/\s+/g, '_');
      setTables((prev) => {
        const newTables = { ...prev };

        const defaultFields: Field[] = [];
        
        // If table has a parent (and parent is not key_value or null), add a foreign key to parent's primary key FIRST
        if (tableData.parent && tableData.parent !== 'key_value' && tableData.parent !== 'null' && newTables[tableData.parent]) {
          const parentTable = newTables[tableData.parent];
          // Find the parent table's primary key field
          const parentPrimaryKey = parentTable.fields.find(f => f.isPrimaryKey || f.type === 'primary_key');
          
          if (parentPrimaryKey) {
            const foreignKeyFieldId = `${tableData.parent}_id`;
            defaultFields.push({
              id: foreignKeyFieldId,
              name: `${parentTable.name} ID`,
              devName: foreignKeyFieldId,
              type: 'foreign_key',
              required: true,
              hasData: false,
              isForeignKey: true,
              foreignKeyReference: `${tableData.parent}.${parentPrimaryKey.id}`,
              isSystemGenerated: true,
            } as Field);
          }
        }
        
        // For all non-key-value tables, add a system-generated primary key field AFTER foreign key
        if (tableData.parent !== 'key_value') {
          const primaryKeyFieldId = `${tableId}_id`;
          defaultFields.push({
            id: primaryKeyFieldId,
            name: `${tableData.name} ID`,
            devName: primaryKeyFieldId,
            type: 'primary_key',
            required: true,
            hasData: false,
            isPrimaryKey: true,
            default: 'System generated',
            isSystemGenerated: true,
          });
        } else {
          // Mark tables under key_value as isKeyValue
          updatedTable.isKeyValue = true;
        }
        
        // For root tables (not key_value group), also add a foreign key field
        const isRootTable = !tableData.parent || tableData.parent === 'null';
        if (isRootTable && tableData.parent !== 'key_value') {
          const foreignKeyFieldId = `${tableId}_fk_id`;
          defaultFields.push({
            id: foreignKeyFieldId,
            name: `${tableData.name} ID`,
            devName: foreignKeyFieldId,
            type: 'string',
            required: true,
            hasData: false,
            isForeignKey: true,
          });
        }

        newTables[tableId] = {
          id: tableId,
          name: tableData.name,
          devName: tableData.devName,
          parent: tableData.parent,
          relationship: tableData.relationship,
          fields: defaultFields,
          children: [],
          hasData: false,
          ...(tableData.keyValueFieldType && { keyValueFieldType: tableData.keyValueFieldType }),
        };

        // Add to parent's children
        if (tableData.parent && newTables[tableData.parent]) {
          newTables[tableData.parent].children = [
            ...newTables[tableData.parent].children,
            tableId,
          ];
        }

        return newTables;
      });

      setSelectedTable(tableId);
    }

    setShowTableModal(false);
    setEditingTable(null);
  };

  const handleDeleteField = (fieldId: string, fieldName: string, hasData: boolean, isSystemGenerated?: boolean) => {
    if (isSystemGenerated) {
      alert('This is a system-generated field and cannot be deleted.');
      return;
    }
    
    setConfirmDialog({
      isOpen: true,
      title: `Delete ${fieldName}?`,
      message: hasData
        ? 'Warning: This field contains data in existing records. Deleting this field will permanently remove all data stored in it. This action cannot be undone.'
        : 'This field has no data and can be safely deleted. This action cannot be undone.',
      onConfirm: () => {
        if (!selectedTable) return;
        
        setTables((prev) => {
          const newTables = { ...prev };
          const table = newTables[selectedTable];
          
          // Delete field (no longer deactivate)
          table.fields = table.fields.filter((f) => f.id !== fieldId);
          
          return newTables;
        });
        
        setConfirmDialog({ ...confirmDialog, isOpen: false });
      },
    });
  };

  const handleDeleteTable = (tableId: string, tableName: string, hasData: boolean) => {
    setConfirmDialog({
      isOpen: true,
      title: hasData ? `Deactivate ${tableName} table?` : `Delete ${tableName} table?`,
      message: hasData
        ? 'This table is used in multiple records and cannot be deleted. Deactivating will hide it from forms and reports, but preserve existing data. All child tables will also be deactivated.'
        : 'This table has no data and can be safely deleted. This action cannot be undone.',
      onConfirm: () => {
        setTables((prev) => {
          const newTables = { ...prev };
          
          if (hasData) {
            // Deactivate table and all children recursively
            const deactivateTableAndChildren = (id: string) => {
              if (newTables[id]) {
                newTables[id] = { ...newTables[id], isActive: false };
                newTables[id].children.forEach(deactivateTableAndChildren);
              }
            };
            deactivateTableAndChildren(tableId);
          } else {
            // Delete table
            const table = newTables[tableId];
            if (table.parent && newTables[table.parent]) {
              newTables[table.parent].children = newTables[table.parent].children.filter(
                (childId) => childId !== tableId
              );
            }
            delete newTables[tableId];
            setSelectedTable(null);
          }
          
          return newTables;
        });
        
        setConfirmDialog({ ...confirmDialog, isOpen: false });
      },
    });
  };

  const handleReactivateTable = (tableId: string) => {
    setTables((prev) => {
      const newTables = { ...prev };
      
      // Reactivate table and all children recursively
      const reactivateTableAndChildren = (id: string) => {
        if (newTables[id]) {
          newTables[id] = { ...newTables[id], isActive: true };
          newTables[id].children.forEach(reactivateTableAndChildren);
        }
      };
      reactivateTableAndChildren(tableId);
      
      return newTables;
    });
  };

  const handleReorderFields = (tableId: string, reorderedFields: Field[]) => {
    setTables((prev) => ({
      ...prev,
      [tableId]: {
        ...prev[tableId],
        fields: reorderedFields,
      },
    }));
  };

  const handleUploadData = (tableId: string, data: any[][]) => {
    // Create a deep copy to ensure each table has independent data
    const dataCopy = data.map(row => [...row]);
    
    setTables((prev) => {
      // Create a completely new tables object with a new table instance
      const newTables = { ...prev };
      const currentTable = newTables[tableId];
      
      // Create a new table object to avoid any reference sharing
      newTables[tableId] = {
        ...currentTable,
        uploadedData: dataCopy,
        hasData: dataCopy.length > 0,
      };
      
      return newTables;
    });
  };

  const handleDeleteRow = (tableId: string, rowIndex: number) => {
    setTables((prev) => {
      const table = prev[tableId];
      if (!table.uploadedData) return prev;
      
      // Create a deep copy of the filtered data
      const newUploadedData = table.uploadedData
        .filter((_, index) => index !== rowIndex)
        .map(row => [...row]);
      
      // Create a completely new tables object with a new table instance
      const newTables = { ...prev };
      newTables[tableId] = {
        ...table,
        uploadedData: newUploadedData,
        hasData: newUploadedData.length > 0,
      };
      
      return newTables;
    });
  };

  const handlePopulateTable = (tableId: string) => {
    setPopulatingTableId(tableId);
    setShowPopulateModal(true);
  };

  const handlePopulateSubmit = (data: { parsedData: any[][] | null; fileHasHeader: boolean }) => {
    if (!populatingTableId || !data.parsedData) return;
    
    // Create a deep copy to ensure each table has independent data
    const uploadData = data.parsedData.map(row => [...row]);
    
    // Replace the table's uploaded data
    setTables((prev) => {
      // Create a completely new tables object with a new table instance
      const newTables = { ...prev };
      const currentTable = newTables[populatingTableId];
      
      // Create a new table object to avoid any reference sharing
      newTables[populatingTableId] = {
        ...currentTable,
        uploadedData: uploadData,
        hasData: uploadData.length > 0,
      };
      
      return newTables;
    });
    
    setShowPopulateModal(false);
    setPopulatingTableId(null);
  };

  const handleOpenWizard = (file: File) => {
    setWizardFile(file);
    setShowWizard(true);
    setShowPopulateModal(false);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "views" ? (
        <Frame812143 />
      ) : (
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeItem={sidebarActive} onItemClick={setSidebarActive} />

          {sidebarActive === "data_imports" ? (
            <ImportDataPage />
          ) : (
            <>
              <TableNavigationPanel
                tables={tables}
                selectedTable={selectedTable}
                onSelectTable={setSelectedTable}
                onCreateTable={handleCreateTable}
              />

              {selectedTable && (
                <DetailPanel
                  table={tables[selectedTable]}
                  tables={tables}
                  onClose={() => setSelectedTable(null)}
                  onEditTable={handleEditTable}
                  onPopulateTable={handlePopulateTable}
                onDeleteTable={handleDeleteTable}
                onReactivateTable={handleReactivateTable}
                onCreateField={handleCreateField}
                onEditField={handleEditField}
                onDeleteField={handleDeleteField}
                onReorderFields={handleReorderFields}
                onUploadData={handleUploadData}
                  onDeleteRow={handleDeleteRow}
                />
              )}
            </>
          )}
        </div>
      )}

      <FieldModal
        isOpen={showFieldModal}
        mode={fieldModalMode}
        tables={tables}
        selectedTableId={selectedTable || undefined}
        editField={editingField}
        onClose={() => {
          setShowFieldModal(false);
          setEditingField(null);
        }}
        onSave={handleSaveField}
      />

      <TableModal
        isOpen={showTableModal}
        mode={tableModalMode}
        tables={tables}
        editTable={editingTable}
        onClose={() => {
          setShowTableModal(false);
          setEditingTable(null);
        }}
        onSave={handleSaveTable}
      />

      <PopulateTableModal
        isOpen={showPopulateModal}
        tableName={populatingTableId ? tables[populatingTableId]?.name || "" : ""}
        tableId={populatingTableId}
        tables={tables}
        onClose={() => {
          setShowPopulateModal(false);
          setPopulatingTableId(null);
        }}
        onSubmit={handlePopulateSubmit}
        onOpenWizard={handleOpenWizard}
      />

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        onConfirm={confirmDialog.onConfirm}
        onCancel={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
      />

      {showWizard && (
        <DataImportWizard
          onClose={() => {
            setShowWizard(false);
            setWizardFile(null);
            setPopulatingTableId(null);
          }}
          initialFile={wizardFile}
          initialStep={2}
          tableName={populatingTableId ? tables[populatingTableId]?.name : undefined}
        />
      )}
    </div>
  );
}
