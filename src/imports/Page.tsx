import { useState } from "react";
import svgPaths from "./svg-7szq71g00n";
import { DataImportWizard } from "../components/DataImportWizard";

function Primary() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Primary">
      <p className="font-['GT_America_VF:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3e4260] text-[18px] text-nowrap whitespace-pre">Import data</p>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <Primary />
    </div>
  );
}

function Lhs() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="LHS">
      <Text />
    </div>
  );
}

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

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-[#2062d5] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0 cursor-pointer border border-[#2062d5]" data-name="Button">
      <Icon />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Import file</p>
    </button>
  );
}

function Actions({ onImportClick }: { onImportClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Actions">
      <Button onClick={onImportClick} />
    </div>
  );
}

function Content({ onImportClick }: { onImportClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Lhs />
      <Actions onImportClick={onImportClick} />
    </div>
  );
}

function Header({ onImportClick }: { onImportClick: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[24px] pr-[36px] py-[24px] relative w-full">
          <Content onImportClick={onImportClick} />
        </div>
      </div>
    </div>
  );
}

function SourceDisplay1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="Source display">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3e4260] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Import history</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <SourceDisplay1 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Header2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="search">
          <path d={svgPaths.p1cea43f0} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Element() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0" data-name="Element">
      <Search />
    </div>
  );
}

function ElementLeft() {
  return (
    <div className="relative shrink-0" data-name="Element left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Element />
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <ElementLeft />
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function InputArea() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[9px] py-[4px] relative w-full">
          <TextIcon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Search">
      <InputArea />
    </div>
  );
}

function FilterList() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filter_list">
          <path d={svgPaths.p19c3ed70} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <FilterList />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Filter</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Actions">
      <Button7 />
    </div>
  );
}

function AdvancedControls1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Advanced controls">
      <Search1 />
      <Actions1 />
    </div>
  );
}

function TableActions1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table actions">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-end px-[10px] py-[12px] relative w-full">
          <Wrapper1 />
          <AdvancedControls1 />
        </div>
      </div>
    </div>
  );
}

function ResizeHandle14() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias7() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap uppercase">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">FILE</p>
      </div>
    </div>
  );
}

function GridPartsShim7() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="filter_list">
          <path d={svgPaths.p272d4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList8 />
    </div>
  );
}

function MenuControl7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon9 />
    </div>
  );
}

function ResizeHandle15() {
  return (
    <div className="content-stretch flex h-[14.09px] items-center justify-end relative shrink-0 w-[135.375px]" data-name="Resize Handle">
      <GridPartsShim7 />
      <MenuControl7 />
    </div>
  );
}

function ColumnHeader7() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle14 />
      <LeftBias7 />
      <ResizeHandle15 />
    </div>
  );
}

function Slot() {
  return (
    <div className="bg-[#ccecea] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Slot">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#004641] text-[14px] text-center text-nowrap whitespace-pre">Complete</p>
    </div>
  );
}

function GridCell() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">New_customers_Mar.csv</p>
          </div>
          <Slot />
        </div>
      </div>
    </div>
  );
}

function Slot4() {
  return (
    <div className="bg-[#f9d9dc] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Slot">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#620837] text-[14px] text-center text-nowrap whitespace-pre">Failed</p>
    </div>
  );
}

function GridCell4() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">New_customers_Mar.csv</p>
          </div>
          <Slot4 />
        </div>
      </div>
    </div>
  );
}

function ClippedGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[365px]" data-name="Clipped-Grid">
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell4 />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273px]" data-name="Column">
      <ColumnHeader7 />
      <ClippedGrid />
    </div>
  );
}

function ResizeHandle16() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias8() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">TYPE</p>
      </div>
    </div>
  );
}

function GridPartsShim8() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function ResizeHandle17() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim8 />
    </div>
  );
}

function ColumnHeader8() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle16 />
      <LeftBias8 />
      <ResizeHandle17 />
    </div>
  );
}

function GridCell17() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell18() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Individual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[190.75px]" data-name="Clipped-Grid">
      <GridCell17 />
      {[...Array(2).keys()].map((_, i) => (
        <GridCell18 key={i} />
      ))}
      <GridCell17 />
      <GridCell17 />
      <GridCell17 />
    </div>
  );
}

function GridCell23() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[166px]" data-name="Column">
      <ColumnHeader8 />
      <ClippedGrid1 />
      {[...Array(11).keys()].map((_, i) => (
        <GridCell23 key={i} />
      ))}
    </div>
  );
}

function ResizeHandle18() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias9() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">NEW RECORDS</p>
      </div>
    </div>
  );
}

function GridPartsShim9() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function ResizeHandle19() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim9 />
    </div>
  );
}

function ColumnHeader9() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle18 />
      <LeftBias9 />
      <ResizeHandle19 />
    </div>
  );
}

function GridCell34() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[0px] text-nowrap">
            <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden text-[14px]">234</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell35() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[0px] text-nowrap">
            <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden text-[14px]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell36() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[0px] text-nowrap">
            <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden text-[14px]">235</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell37() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell38() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">
              -<span className="font-['GT_America:Regular',_sans-serif] not-italic">-</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[190.75px]" data-name="Clipped-Grid">
      <GridCell34 />
      <GridCell35 />
      <GridCell36 />
      <GridCell37 />
      <GridCell38 />
      <GridCell34 />
    </div>
  );
}

function GridCell40() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[0px] text-nowrap">
            <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden text-[14px]">234</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[124px]" data-name="Column">
      <ColumnHeader9 />
      <ClippedGrid2 />
      {[...Array(11).keys()].map((_, i) => (
        <GridCell40 key={i} />
      ))}
    </div>
  );
}

function ResizeHandle20() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias10() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">UPDATED RECORDS</p>
      </div>
    </div>
  );
}

function GridPartsShim10() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="filter_list">
          <path d={svgPaths.p272d4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList9 />
    </div>
  );
}

function MenuControl8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon27 />
    </div>
  );
}

function ResizeHandle21() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim10 />
      <MenuControl8 />
    </div>
  );
}

function ColumnHeader10() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-[190.75px]" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle20 />
      <LeftBias10 />
      <ResizeHandle21 />
    </div>
  );
}

function GridCell51() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">346</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell52() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell53() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">152</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell54() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[0px] text-nowrap">
            <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden text-[14px]">145</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell55() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">
              -<span className="font-['GT_America:Regular',_sans-serif] not-italic">-</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell56() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">536</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[190.75px]" data-name="Clipped-Grid">
      <GridCell51 />
      <GridCell52 />
      <GridCell53 />
      <GridCell54 />
      <GridCell55 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
      <GridCell56 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[157px]" data-name="Column">
      <ColumnHeader10 />
      <ClippedGrid3 />
    </div>
  );
}

function ResizeHandle22() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias11() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">ERROR COUNT</p>
      </div>
    </div>
  );
}

function GridPartsShim11() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="filter_list">
          <path d={svgPaths.p272d4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList10 />
    </div>
  );
}

function MenuControl9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon28 />
    </div>
  );
}

function ResizeHandle23() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim11 />
      <MenuControl9 />
    </div>
  );
}

function ColumnHeader11() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-[156px]" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle22 />
      <LeftBias11 />
      <ResizeHandle23 />
    </div>
  );
}

function GridCell68() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell69() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell72() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">
              -<span className="font-['GT_America:Regular',_sans-serif] not-italic">-</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell73() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[156px]" data-name="Clipped-Grid">
      <GridCell68 />
      <GridCell69 />
      <GridCell68 />
      <GridCell68 />
      <GridCell72 />
      <GridCell73 />
    </div>
  );
}

function GridCell74() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[156px]" data-name="Column">
      <ColumnHeader11 />
      <ClippedGrid4 />
      {[...Array(11).keys()].map((_, i) => (
        <GridCell74 key={i} />
      ))}
    </div>
  );
}

function ResizeHandle24() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias12() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">UPLOAD DATE</p>
      </div>
    </div>
  );
}

function GridPartsShim12() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="filter_list">
          <path d={svgPaths.p272d4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList11 />
    </div>
  );
}

function MenuControl10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon29 />
    </div>
  );
}

function ResizeHandle25() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim12 />
      <MenuControl10 />
    </div>
  );
}

function ColumnHeader12() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-[203px]" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle24 />
      <LeftBias12 />
      <ResizeHandle25 />
    </div>
  );
}

function GridCell85() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">15 AUG 2025 at 12:38 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell89() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">15 AUG 2025 at 12:38 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[203px]" data-name="Clipped-Grid">
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell89 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
      <GridCell85 />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[219px]" data-name="Column">
      <ColumnHeader12 />
      <ClippedGrid5 />
    </div>
  );
}

function DataGrid() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Grid">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function Grid() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Grid">
      <DataGrid />
    </div>
  );
}

function DataMinusScrollbar() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Data-Minus-Scrollbar">
      <Grid />
    </div>
  );
}

function ColumnsAndScrollbar() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Columns and Scrollbar">
      <DataMinusScrollbar />
    </div>
  );
}

function ColumnsAndFilter() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Columns and Filter">
      <ColumnsAndScrollbar />
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Grid">
      <ColumnsAndFilter />
    </div>
  );
}

function Counter() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-end leading-[0] not-italic pl-0 pr-[38px] py-0 relative shrink-0 text-[#3e4260] text-nowrap" data-name="Counter">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">1</p>
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">to</p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center relative shrink-0 text-[13px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">10</p>
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">of</p>
      </div>
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">10</p>
      </div>
    </div>
  );
}

function FirstThemeQuartz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="first-theme-quartz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="first-theme-quartz">
          <path clipRule="evenodd" d={svgPaths.p217c1780} fill="var(--fill-0, #AEB2BC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function First() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="first">
      <FirstThemeQuartz />
    </div>
  );
}

function ExpandedThemeQuartz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="expanded-theme-quartz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="expanded-theme-quartz">
          <path clipRule="evenodd" d={svgPaths.p153b780} fill="var(--fill-0, #AEB2BC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Expanded() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="expanded">
      <ExpandedThemeQuartz />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Controls">
      <First />
      <Expanded />
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#3e4260] text-nowrap" data-name="Numbers">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">Page</p>
      </div>
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">1</p>
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">of</p>
      </div>
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center relative shrink-0 text-[0px]">
        <p className="font-['IBM_Plex_Sans:Medium',_sans-serif] leading-[24px] not-italic text-[14px] text-nowrap whitespace-pre">30</p>
      </div>
    </div>
  );
}

function CancelThemeQuartz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="cancel-theme-quartz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cancel-theme-quartz">
          <path clipRule="evenodd" d={svgPaths.p2fdcb7f2} fill="var(--fill-0, #AEB2BC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Contracted() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="contracted">
      <CancelThemeQuartz />
    </div>
  );
}

function LastThemeQuartz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="last-theme-quartz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="last-theme-quartz">
          <path clipRule="evenodd" d={svgPaths.p29242080} fill="var(--fill-0, #AEB2BC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Last() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="last">
      <LastThemeQuartz />
    </div>
  );
}

function Controls1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Controls">
      <Contracted />
      <Last />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Pagination">
      <Controls />
      <Numbers />
      <Controls1 />
    </div>
  );
}

function GridPartsPaginationControl() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Grid-Parts/Pagination Control">
      <Counter />
      <Pagination />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="bg-white h-[48px] min-h-[35px] relative shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center justify-end min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-end min-h-inherit px-[16px] py-0 relative w-full">
          <GridPartsPaginationControl />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[6px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#646882] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Pagination1 />
    </div>
  );
}

function AgGridColumnBasedLayout() {
  return (
    <div className="bg-white min-w-[6px] relative rounded-[2px] shrink-0 w-full" data-name="AG Grid (Column based layout)">
      <div className="content-stretch flex flex-col items-start min-w-inherit overflow-clip relative rounded-[inherit] w-full">
        <Grid1 />
        <Footer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ecf0f3] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function OwnershipTablesAgGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1081px]" data-name="Ownership Tables AG Grid">
      <TableActions1 />
      <AgGridColumnBasedLayout />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="h-[901px] relative shrink-0 w-full" data-name="Content container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[901px] items-start p-[24px] relative w-full">
          <OwnershipTablesAgGrid />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [showWizard, setShowWizard] = useState(false);

  if (showWizard) {
    return <DataImportWizard onClose={() => setShowWizard(false)} initialStep={1} />;
  }

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Page">
      <Header onImportClick={() => setShowWizard(true)} />
      <ContentContainer />
    </div>
  );
}