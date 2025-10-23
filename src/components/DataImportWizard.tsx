import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-v8csnux6fo";
import { Checkbox } from "./ui/checkbox";

interface DataImportWizardProps {
  onClose: () => void;
  initialFile?: File | null;
  initialStep?: number;
  tableName?: string;
}

type DataType = "individual" | "company" | "reference_list" | null;
type ImportType = "update" | "create" | null;

interface UniqueIdentifier {
  id: string;
  label: string;
  checked: boolean;
}

interface ColumnMapping {
  columnName: string;
  previewData: string[];
  mappedField: string | null;
  status: 'complete' | 'error' | null;
  errorCount?: number;
  existingValue: 'overwrite' | 'skip' | null;
}

interface AvailableField {
  id: string;
  label: string;
}

function MoodysLogo1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96.548px] z-[2]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 16">
        <g clipPath="url(#clip0_45_5822)">
          <path d={svgPaths.p72f1a80} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_45_5822">
            <rect fill="white" height="16" width="96.5483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GlobalAppHeaderEvo() {
  return (
    <div className="bg-[#0a1264] h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[32px] h-[64px] items-center px-[36px] py-0 relative w-full">
          <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[32px] py-0 relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] isolate items-center justify-center relative shrink-0 w-full">
              <MoodysLogo1 />
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[22px] h-[60px] items-center px-0 py-[8px] relative shrink-0">
            <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0">
              <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Views</p>
            </div>
            <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0">
              <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Reports</p>
            </div>
            <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0">
              <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepIndicator({ step, label, isActive, isCompleted }: { step: number; label: string; isActive: boolean; isCompleted: boolean }) {
  return (
    <div className="flex items-center gap-[8px] relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]">
        <div className={`${isActive ? 'bg-white border-[#2062d5]' : isCompleted ? 'bg-[#2062d5] border-[#2062d5]' : 'bg-white border-[#d5d7dd]'} content-stretch flex items-center justify-center relative rounded-[999px] size-[24px] border border-solid`}>
          <p className={`font-['GT_America:Medium',_sans-serif] leading-[20px] ${isActive ? 'text-[#2062d5]' : isCompleted ? 'text-white' : 'text-[#84899f]'} text-[12px]`}>{step}</p>
        </div>
      </div>
      <p className={`font-['GT_America:Regular',_sans-serif] leading-[20px] ${isActive ? 'text-[#3e4260]' : 'text-[#646882]'} text-[12px]`}>{label}</p>
    </div>
  );
}

function HorizontalStepIndicators({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: 'Upload' },
    { number: 2, label: 'Map' },
    { number: 3, label: 'Match' },
    { number: 4, label: 'Review' },
    { number: 5, label: 'Import' },
  ];

  return (
    <div className="flex items-center gap-0 relative w-full">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1">
          <StepIndicator
            step={step.number}
            label={step.label}
            isActive={currentStep === step.number}
            isCompleted={currentStep > step.number}
          />
          {index < steps.length - 1 && (
            <div className="flex items-center px-[12px] flex-1">
              <div className={`h-[1px] w-full ${currentStep > step.number ? 'bg-[#2062d5]' : 'bg-[#d5d7dd]'}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function DataImportWizard({ onClose, initialFile, initialStep = 1, tableName }: DataImportWizardProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [dataType, setDataType] = useState<DataType>(null);
  const [importType, setImportType] = useState<ImportType>(null);
  const [showDataTypeDropdown, setShowDataTypeDropdown] = useState(false);
  const [showImportTypeDropdown, setShowImportTypeDropdown] = useState(false);
  
  const individualIdentifiers: UniqueIdentifier[] = [
    { id: 'name', label: 'Name', checked: false },
    { id: 'company', label: 'Company', checked: false },
    { id: 'email', label: 'Email', checked: false },
    { id: 'drivers_license', label: 'Drivers License', checked: false },
    { id: 'employee_id', label: 'Employee ID', checked: false },
  ];

  const companyIdentifiers: UniqueIdentifier[] = [
    { id: 'address', label: 'Address', checked: false },
    { id: 'orbis_id', label: 'Orbis ID', checked: false },
    { id: 'bvd_id', label: 'BvD ID', checked: false },
    { id: 'vat', label: 'VAT', checked: false },
    { id: 'customer_number', label: 'Customer number', checked: false },
    { id: 'ein', label: 'EIN', checked: false },
  ];

  const [uniqueIdentifiers, setUniqueIdentifiers] = useState<UniqueIdentifier[]>(companyIdentifiers);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [columnMappings, setColumnMappings] = useState<ColumnMapping[]>([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [fieldSearchTerm, setFieldSearchTerm] = useState('');
  const [skipUnmappedColumns, setSkipUnmappedColumns] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const dropdownButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Handle initial file upload if provided
  useEffect(() => {
    if (initialFile && !uploadedFile) {
      setUploadedFile(initialFile);
      parseCSVFile(initialFile);
    }
  }, [initialFile]);

  const availableFields: AvailableField[] = [
    { id: 'name', label: 'Name' },
    { id: 'company_number', label: 'Company number' },
    { id: 'orbis_id', label: 'Orbis ID' },
    { id: 'date_of_incorporation', label: 'Date of incorporation' },
    { id: 'country_of_incorporation', label: 'Country of incorporation' },
    { id: 'customer_number', label: 'Customer number' },
    { id: 'credit_score', label: 'Credit score' },
  ];

  const filteredFields = availableFields.filter(field =>
    field.label.toLowerCase().includes(fieldSearchTerm.toLowerCase())
  );

  const unmappedCount = columnMappings.filter(m => !m.mappedField).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdownIndex !== null) {
        const target = event.target as HTMLElement;
        const dropdown = document.querySelector('.field-dropdown-portal');
        const button = dropdownButtonRefs.current[openDropdownIndex];
        
        if (dropdown && !dropdown.contains(target) && button && !button.contains(target)) {
          setOpenDropdownIndex(null);
          setDropdownPosition(null);
          setFieldSearchTerm('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdownIndex]);

  const handleDropdownToggle = (index: number) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
      setDropdownPosition(null);
    } else {
      const buttonEl = dropdownButtonRefs.current[index];
      if (buttonEl) {
        const rect = buttonEl.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX
        });
      }
      setOpenDropdownIndex(index);
    }
  };

  const handleFieldSelect = (index: number, fieldId: string) => {
    const field = availableFields.find(f => f.id === fieldId);
    if (field) {
      const newMappings = [...columnMappings];
      newMappings[index].mappedField = field.label;
      // Simulate validation - some fields might have errors
      newMappings[index].status = fieldId === 'date_of_incorporation' ? 'error' : 'complete';
      newMappings[index].errorCount = fieldId === 'date_of_incorporation' ? 2 : undefined;
      setColumnMappings(newMappings);
      setOpenDropdownIndex(null);
      setDropdownPosition(null);
      setFieldSearchTerm('');
    }
  };

  const getDataTypeLabel = () => {
    if (dataType === 'individual') return 'Individual';
    if (dataType === 'company') return 'Company';
    if (dataType === 'reference_list') return 'Reference list';
    return 'Select data type';
  };

  const getImportTypeLabel = () => {
    if (importType === 'update') return `Update existing ${dataType === 'company' ? 'company' : 'individual'} records`;
    if (importType === 'create') return `Create new ${dataType === 'company' ? 'company' : 'individual'} records`;
    return 'Select import type';
  };

  const toggleIdentifier = (id: string) => {
    setUniqueIdentifiers(prev => 
      prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    );
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newIdentifiers = [...uniqueIdentifiers];
    const draggedItem = newIdentifiers[draggedIndex];
    newIdentifiers.splice(draggedIndex, 1);
    newIdentifiers.splice(index, 0, draggedItem);
    
    setUniqueIdentifiers(newIdentifiers);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const downloadExcelTemplate = () => {
    let headers: string[] = [];
    
    if (importType === 'update') {
      // For update, just show Company ID or Individual ID
      headers = dataType === 'company' ? ['Company ID'] : ['Individual ID'];
    } else if (importType === 'create') {
      // For create, show selected unique identifiers
      const selectedIdentifiers = uniqueIdentifiers.filter(identifier => identifier.checked);
      
      selectedIdentifiers.forEach(identifier => {
        if (identifier.id === 'address') {
          // Add address sub-fields
          headers.push('Address line 1', 'City', 'Region', 'Postcode', 'Country');
        } else {
          headers.push(identifier.label);
        }
      });
    }
    
    // Create CSV content with headers
    const csvContent = headers.join(',') + '\n';
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${dataType}_import_template.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      parseCSVFile(file);
    }
  };

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          // Escaped quote
          current += '"';
          i++; // Skip next quote
        } else {
          // Toggle quotes
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        // End of field
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    // Add last field
    result.push(current.trim());
    return result;
  };

  const parseCSVFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n').filter(line => line.trim());
      
      if (lines.length === 0) return;
      
      const headers = parseCSVLine(lines[0]);
      const dataRows = lines.slice(1, 3).map(line => parseCSVLine(line)); // Get first 2 rows for preview
      
      const mappings: ColumnMapping[] = headers.map((header, headerIndex) => {
        const previewData = dataRows.map(row => {
          return row[headerIndex] || '';
        });
        
        return {
          columnName: header,
          previewData: previewData,
          mappedField: null,
          status: null,
          existingValue: 'overwrite'
        };
      });
      
      setColumnMappings(mappings);
    };
    reader.readAsText(file);
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + 'B';
    if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + 'Kb';
    return Math.round(bytes / (1024 * 1024)) + 'Mb';
  };

  const canProceed = () => {
    if (currentStep === 1) {
      if (!dataType) return false;
      if (!importType) return false;
      if (importType === 'create' && !uniqueIdentifiers.some(i => i.checked)) return false;
      if (!uploadedFile) return false;
      return true;
    }
    
    if (currentStep === 2) {
      // Can proceed if we have no unmapped columns OR if user chose to skip them
      return unmappedCount === 0 || skipUnmappedColumns;
    }
    
    return false;
  };

  return (
    <div className="bg-white fixed inset-0 z-50 flex flex-col">
      <GlobalAppHeaderEvo />
      
      {/* Header with progress */}
      <div className="bg-white relative shrink-0 w-full border-b border-[#ecf0f3]">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[36px] py-[24px] relative w-full">
            <p className="font-['GT_America_VF:Medium',_sans-serif] font-medium leading-[24px] text-[#3e4260] text-[18px]">Import file</p>
            
            <HorizontalStepIndicators currentStep={currentStep} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {currentStep === 1 && (
          <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[36px] py-[24px] relative">
            
            {/* Data Type */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]">
            <h3 className="text-[#3e4260]">Data type</h3>
            <p className="text-[#3e4260]">Select the type of data records you wish to create or update</p>
            
            <div className="relative">
              <button
                onClick={() => setShowDataTypeDropdown(!showDataTypeDropdown)}
                className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] border border-[#aeb2bc]"
              >
                <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[14px] whitespace-pre">{getDataTypeLabel()}</p>
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1c0f0600} fill="#3E4260" />
                  </svg>
                </div>
              </button>
              
              {showDataTypeDropdown && (
                <div className="absolute top-[36px] left-0 bg-white rounded-[3px] border border-[#aeb2bc] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)] z-10 min-w-[200px]">
                  <div
                    onClick={() => {
                      setDataType('individual');
                      setShowDataTypeDropdown(false);
                      setImportType(null);
                      setUniqueIdentifiers(individualIdentifiers);
                    }}
                    className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] cursor-pointer hover:bg-gray-50"
                  >
                    <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">Individual</p>
                  </div>
                  <div
                    onClick={() => {
                      setDataType('company');
                      setShowDataTypeDropdown(false);
                      setImportType(null);
                      setUniqueIdentifiers(companyIdentifiers);
                    }}
                    className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] cursor-pointer hover:bg-gray-50"
                  >
                    <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">Company</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Import Type - Only show if data type is selected */}
          {dataType && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]">
              <h3 className="text-[#3e4260]">Import type</h3>
              <p className="text-[#3e4260]">
                Select how to import {dataType === 'company' ? 'company' : dataType === 'individual' ? 'individual' : 'reference list'} records
              </p>
              
              <div className="relative">
                <button
                  onClick={() => setShowImportTypeDropdown(!showImportTypeDropdown)}
                  className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] border border-[#aeb2bc]"
                >
                  <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[14px] whitespace-pre">{getImportTypeLabel()}</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p1c0f0600} fill="#3E4260" />
                    </svg>
                  </div>
                </button>
                
                {showImportTypeDropdown && (
                  <div className="absolute top-[36px] left-0 bg-white rounded-[3px] border border-[#aeb2bc] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)] z-10 min-w-[254px]">
                    <div
                      onClick={() => {
                        setImportType('update');
                        setShowImportTypeDropdown(false);
                      }}
                      className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] cursor-pointer hover:bg-gray-50"
                    >
                      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">
                        Update existing {dataType === 'company' ? 'company' : 'individual'} records
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        setImportType('create');
                        setShowImportTypeDropdown(false);
                      }}
                      className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] cursor-pointer hover:bg-gray-50"
                    >
                      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">
                        Create new {dataType === 'company' ? 'company' : 'individual'} records
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Unique Identifier - Only show if import type is "create" */}
          {dataType && importType === 'create' && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]">
              <h3 className="text-[#3e4260] text-[14px]">Unique identifier</h3>
              <p className="text-[#3e4260] w-[728px]">
                Select at least one unique identifier is required to match {dataType === 'company' ? 'company' : 'individual'} records. Additional identifiers can be selected and reordered to waterfall to additional identifiers if needed.
              </p>
              
              <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative rounded-[3px] w-[251px] border border-[#aeb2bc]">
                {uniqueIdentifiers.map((identifier, index) => (
                  <div
                    key={identifier.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full cursor-move"
                  >
                    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                      <Checkbox
                        checked={identifier.checked}
                        onCheckedChange={() => toggleIdentifier(identifier.id)}
                        className="shrink-0"
                      />
                      <label
                        onClick={() => toggleIdentifier(identifier.id)}
                        className="font-['GT_America:Regular',_sans-serif] leading-[24px] text-[#3e4260] text-[14px] cursor-pointer"
                      >
                        {identifier.label}
                      </label>
                    </div>
                    <div className="relative shrink-0 size-[24px] cursor-grab active:cursor-grabbing">
                      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                        <path d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z" fill="#84899F" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Required fields - Show if import type is "update" OR if import type is "create" and at least one identifier is checked */}
          {dataType && importType && (importType === 'update' || (importType === 'create' && uniqueIdentifiers.some(i => i.checked))) && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]">
              <h3 className="text-[#3e4260] text-[14px]">Required fields</h3>
              <p className="text-[#3e4260] w-[728px]">
                Download an <span onClick={downloadExcelTemplate} className="underline cursor-pointer">excel template here</span> with the fields required for import
              </p>
            </div>
          )}

          {/* Upload a file - Show if import type is "update" OR if import type is "create" and at least one identifier is checked */}
          {dataType && importType && (importType === 'update' || (importType === 'create' && uniqueIdentifiers.some(i => i.checked))) && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]">
              <h3 className="text-[#3e4260] text-[14px]">Upload a file</h3>
              <p className="text-[#3e4260]">
                Select the CSV file that contains your profile data. File size can't exceed 50 MB.
              </p>
              
              <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[3px] shrink-0 w-[477px] border border-[#aeb2bc] border-dashed">
                {!uploadedFile ? (
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <label className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] border border-[#aeb2bc] cursor-pointer">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <path d="M7.5 13.75H12.5V8.75H15.8333L10 2.91667L4.16667 8.75H7.5V13.75ZM10 5.275L11.8083 7.08333H10.8333V12.0833H9.16667V7.08333H8.19167L10 5.275ZM4.16667 15.4167H15.8333V17.0833H4.16667V15.4167Z" fill="#84899F" />
                        </svg>
                      </div>
                      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">Select file</p>
                      <input 
                        type="file" 
                        accept=".csv" 
                        onChange={handleFileSelect} 
                        className="hidden"
                      />
                    </label>
                    <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] text-[#646882] text-[14px]">or drag and drop your file here</p>
                  </div>
                ) : (
                  <div className="bg-white relative rounded-[3px] shrink-0 w-full border border-[#ecf0f3]">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[8px] items-center pl-[8px] pr-[14px] py-[4px] relative w-full">
                        {/* File Icon */}
                        <div className="h-[42px] relative shrink-0 w-[35px]">
                          <div className="absolute inset-0">
                            <div className="absolute inset-0">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 42">
                                <path d="M0 3.07321C0 1.37595 1.23711 4.21624e-05 2.76316 4.21624e-05L25.1562 0L35 11.0527V38.9269C35 40.6241 33.7629 42 32.2368 42H2.76316C1.23711 42 0 40.6241 0 38.9269V3.07321Z" fill="#ECEFF1" />
                              </svg>
                            </div>
                            <div className="absolute bottom-[73.68%] flex items-center justify-center left-[71.88%] right-0 top-0">
                              <div className="flex-none h-[11.053px] rotate-[180deg] w-[9.844px]">
                                <div className="relative size-full">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                                    <path d="M9.84375 11.0526L0 0H7.27582C8.69405 0 9.84375 1.2909 9.84375 2.88329V11.0526Z" fill="#CFD8DC" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-[#b0bec5] bottom-0 left-0 right-0 rounded-bl-[3px] rounded-br-[3px] top-[71.05%]" />
                            <div className="absolute bottom-0 flex flex-col font-['Bliss_Pro:Bold',_sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[8px] text-center text-white top-[71.05%]">
                              <p className="leading-[12px]">csv</p>
                            </div>
                          </div>
                          <div className="absolute bottom-[42.1%] left-1/4 right-1/4 top-[34.21%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                              <path d="M0 6.12146H5.25V3.82591H0V6.12146ZM0 9.94737H5.25V7.65182H0V9.94737ZM0 2.29555H5.25V0H0V2.29555ZM7 6.12146H17.5V3.82591H7V6.12146ZM7 9.94737H17.5V7.65182H7V9.94737ZM7 0V2.29555H17.5V0H7Z" fill="#D5D7DD" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
                          <p className="font-['GT_America:Medium',_sans-serif] h-[24px] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap w-full">{uploadedFile.name}</p>
                          <p className="font-['GT_America:Regular',_sans-serif] h-[24px] leading-[18px] relative shrink-0 text-[#646882] text-[13px] w-[180px]">CSV, {formatFileSize(uploadedFile.size)}</p>
                        </div>
                        
                        <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                              <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.325 16.6667 3.33333 13.675 3.33333 10C3.33333 6.325 6.325 3.33333 10 3.33333C13.675 3.33333 16.6667 6.325 16.6667 10C16.6667 13.675 13.675 16.6667 10 16.6667ZM13.825 6.31667L8.33333 11.8083L6.175 9.65833L5 10.8333L8.33333 14.1667L15 7.5L13.825 6.31667Z" fill="#008580" />
                            </svg>
                          </div>
                        </div>
                        
                        <button 
                          onClick={handleFileRemove}
                          className="relative shrink-0 size-[18px] cursor-pointer"
                        >
                          <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                            <rect fill="white" height="18" rx="3" width="18" />
                            <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#3E4260" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          </div>
        )}

        {/* Step 2: Map */}
        {currentStep === 2 && columnMappings.length > 0 && (
          <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[36px] py-[24px] relative">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]">
              <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[16px]">
                {tableName ? `Map columns in your file to the corresponding fields in ${tableName}` : 'Map columns in your file to the corresponding fields in Maxsight'}
              </p>
            </div>

            {/* Mapping Table */}
            <div className="bg-white relative rounded-[3px] border border-[#ecf0f3]">
              {/* Table Headers */}
              <div className="flex bg-white border-b border-[#ecf0f3]">
                <div className="flex-none w-[363px] h-[48px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                  <p className="font-['IBM_Plex_Sans:Medium',_sans-serif] text-[#3e4260] text-[14px]">FILE COLUMN HEADER</p>
                </div>
                <div className="flex-none w-[284px] h-[48px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                  <p className="font-['IBM_Plex_Sans:Medium',_sans-serif] text-[#3e4260] text-[14px]">PREVIEW COLUMN DATA</p>
                </div>
                <div className="flex-none w-[247px] h-[48px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                  <p className="font-['IBM_Plex_Sans:Medium',_sans-serif] text-[#3e4260] text-[14px]">MAXSIGHT FIELD</p>
                </div>
                <div className="flex-none w-[173px] h-[48px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                  <p className="font-['IBM_Plex_Sans:Medium',_sans-serif] text-[#3e4260] text-[14px] uppercase">MAPPING STATUS</p>
                </div>
                <div className="flex-none w-[190px] h-[48px] flex items-center px-[16px]">
                  <p className="font-['IBM_Plex_Sans:Medium',_sans-serif] text-[#3e4260] text-[14px]">EXISTING VALUES</p>
                </div>
              </div>

              {/* Table Rows */}
              {columnMappings.map((mapping, index) => (
                <div key={index} className="flex border-b border-[#ecf0f3]">
                  {/* Column Name */}
                  <div className="flex-none w-[363px] min-h-[65px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] text-[#3e4260] text-[14px]">{mapping.columnName}</p>
                  </div>
                  
                  {/* Preview Data */}
                  <div className="flex-none w-[284px] min-h-[65px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                    <div className="font-['IBM_Plex_Sans:Regular',_sans-serif] text-[#3e4260] text-[14px] leading-[24px]">
                      {mapping.previewData.map((data, i) => (
                        <p key={i} className={i === 0 ? 'mb-0' : ''}>{data}</p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Maxsight Field Dropdown */}
                  <div className="flex-none w-[247px] min-h-[65px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                    <button
                      ref={(el) => (dropdownButtonRefs.current[index] = el)}
                      onClick={() => handleDropdownToggle(index)}
                      className={`${mapping.mappedField ? 'bg-white border-[#aeb2bc]' : 'bg-[#f2f7fd] border-[#2062d5]'} box-border flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] rounded-[3px] border`}
                    >
                      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[14px] whitespace-nowrap">
                        {mapping.mappedField || 'Choose or create field'}
                      </p>
                      <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                        <path d="M13.825 6.9125L10 10.7292L6.175 6.9125L5 8.0875L10 13.0875L15 8.0875L13.825 6.9125Z" fill="#3E4260" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Mapping Status */}
                  <div className="flex-none w-[173px] min-h-[65px] flex items-center px-[16px] border-r border-[#ecf0f3]">
                    {mapping.status === 'complete' && (
                      <div className="bg-[#ccecea] px-[8px] rounded-[14px]">
                        <p className="font-['GT_America:Medium',_sans-serif] text-[#004641] text-[14px] leading-[24px]">Complete</p>
                      </div>
                    )}
                    {mapping.status === 'error' && (
                      <div className="bg-[#ffe2c6] px-[8px] rounded-[14px] flex items-center gap-[2px]">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path d="M9 4.8675L14.6475 14.625H3.3525L9 4.8675ZM9 1.875L0.75 16.125H17.25L9 1.875ZM9.75 12.375H8.25V13.875H9.75V12.375ZM9.75 7.875H8.25V10.875H9.75V7.875Z" fill="#620837" />
                        </svg>
                        <p className="font-['GT_America:Medium',_sans-serif] text-[#6b321f] text-[14px] leading-[24px] underline">{mapping.errorCount} Errors</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Existing Values */}
                  <div className="flex-none w-[190px] min-h-[65px] flex items-center px-[16px]">
                    {mapping.mappedField && (
                      <button className="bg-white border border-[#aeb2bc] h-[32px] px-[9px] py-[5px] rounded-[3px] flex items-center gap-[4px]">
                        <p className="font-['GT_America:Medium',_sans-serif] text-[#3e4260] text-[14px]">Overwrite</p>
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path d="M13.825 6.9125L10 10.7292L6.175 6.9125L5 8.0875L10 13.0875L15 8.0875L13.825 6.9125Z" fill="#3E4260" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dropdown Portal - Rendered outside table to avoid clipping */}
            {openDropdownIndex !== null && dropdownPosition && (
              <div 
                className="field-dropdown-portal fixed z-[100] bg-white rounded-[3px] border border-[#aeb2bc] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)] w-[348px]"
                style={{
                  top: `${dropdownPosition.top}px`,
                  left: `${dropdownPosition.left}px`
                }}
              >
                {/* Search */}
                <div className="p-[12px] pb-[4px]">
                  <input
                    type="text"
                    placeholder="Search for a field"
                    value={fieldSearchTerm}
                    onChange={(e) => setFieldSearchTerm(e.target.value)}
                    className="w-full h-[32px] px-[9px] py-[4px] border border-[#b0bec5] rounded-[3px] font-['Bliss_Pro:Regular',_sans-serif] text-[#646882] text-[15px]"
                  />
                </div>
                
                {/* Field List */}
                <div className="max-h-[200px] overflow-y-auto">
                  {filteredFields.map(field => (
                    <div
                      key={field.id}
                      onClick={() => handleFieldSelect(openDropdownIndex, field.id)}
                      className="px-[12px] py-[8px] hover:bg-gray-50 cursor-pointer"
                    >
                      <p className="font-['GT_America:Regular',_sans-serif] text-[#3e4260] text-[14px]">{field.label}</p>
                    </div>
                  ))}
                </div>
                
                {/* Create Custom Field Button */}
                <div className="p-[10px] border-t border-[#d5d7dd]">
                  <button className="w-[160px] h-[32px] bg-[#2062d5] border border-[#2062d5] rounded-[3px] mx-auto block">
                    <p className="font-['GT_America:Medium',_sans-serif] text-white text-[14px]">Create custom field</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#f4f5f6] box-border content-stretch flex h-[56px] items-center justify-between px-[16px] py-[12px] relative shrink-0 border-t border-[#f4f5f6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)]">
        <div className="content-stretch flex items-center gap-[16px]">
          <button
            onClick={() => {
              if (currentStep > 1) {
                setCurrentStep(currentStep - 1);
              } else {
                onClose();
              }
            }}
            className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] border border-[#aeb2bc]"
          >
            <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">Back</p>
          </button>
          <button
            onClick={onClose}
            className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px]"
          >
            <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] text-[#3e4260] text-[14px]">Cancel</p>
          </button>
        </div>

        <div className="flex items-center gap-[16px]">
          {/* Show unmapped columns info on step 2 */}
          {currentStep === 2 && unmappedCount > 0 && (
            <>
              <p className="font-['GT_America:Medium',_sans-serif] text-[#3e4260] text-[14px]">
                You have {unmappedCount} unmapped {unmappedCount === 1 ? 'column' : 'columns'}
              </p>
              <div className="flex items-center gap-[8px]">
                <Checkbox
                  checked={skipUnmappedColumns}
                  onCheckedChange={(checked) => setSkipUnmappedColumns(checked as boolean)}
                />
                <p className="font-['GT_America:Regular',_sans-serif] text-[#3e4260] text-[14px]">
                  Don't import data in unmapped columns
                </p>
              </div>
            </>
          )}
          
          <button
            onClick={() => {
              if (canProceed() && currentStep < 5) {
                setCurrentStep(currentStep + 1);
              }
            }}
            disabled={!canProceed()}
            className={`${canProceed() ? 'bg-[#2062d5] border-[#2062d5]' : 'bg-white border-[#d5d7dd]'} box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] border`}
          >
            <p className={`font-['GT_America:${canProceed() ? 'Medium' : 'Regular'}',_sans-serif] leading-[24px] ${canProceed() ? 'text-white' : 'text-[#646882]'} text-[14px]`}>Next</p>
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p6903c80} fill={canProceed() ? 'white' : '#646882'} />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
