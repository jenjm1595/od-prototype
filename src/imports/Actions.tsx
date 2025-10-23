import svgPaths from "./svg-x73k3zhubx";

function FileUpload() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="file_upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="file_upload">
          <path d={svgPaths.p341a4580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0" data-name="Icon">
      <FileUpload />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2062d5] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Import file</p>
    </div>
  );
}

export default function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full" data-name="Actions">
      <Button />
    </div>
  );
}