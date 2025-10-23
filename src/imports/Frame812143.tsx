import { useState } from "react";
import svgPaths from "./svg-qba28ibfwg";
import ImportActions from "./Actions";
import Business from "./Business";
import Person from "./Person";

function Bookmarks() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bookmarks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bookmarks">
          <path d={svgPaths.pd00e300} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItem({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" 
      data-name="Nav Item"
      onClick={onClick}
    >
      <Bookmarks />
      <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#37474f] text-[14px]">
        <p className="leading-[24px]">Portfolio</p>
      </div>
    </div>
  );
}

function LeftNavLink({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className={`${isActive ? 'bg-[#f4f5f6]' : ''} relative rounded-[4px] shrink-0 w-full`} data-name="Left nav link">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start pl-[32px] pr-[8px] py-[4px] relative w-full">
          <NavItem isActive={isActive} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function PlaylistAddCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="playlist_add_check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="playlist_add_check">
          <g id="Vector">
            <path d={svgPaths.p1b82b500} fill="#84899F" />
            <path d={svgPaths.p221f7ff0} fill="#84899F" />
            <path d={svgPaths.p25b7a80} fill="#84899F" />
            <path d={svgPaths.p24408e00} fill="#84899F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftContent({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2] cursor-pointer ${isActive ? 'bg-[#f4f5f6]' : ''}`}
      data-name="Left content"
      onClick={onClick}
    >
      <PlaylistAddCheck />
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Tasks</p>
      </div>
    </div>
  );
}

function NavMenuItems({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className={`relative rounded-[3px] shrink-0 w-full ${isActive ? 'bg-[#f4f5f6]' : ''}`} data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[28px] pr-[8px] py-[8px] relative w-full">
          <LeftContent isActive={isActive} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return <div className="basis-0 grow min-h-px min-w-px rounded-[4px] shrink-0 w-full" data-name="Content" />;
}

function Database() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="database">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d="M10 3.33333C6.31667 3.33333 3.33333 4.25 3.33333 5.41667V7.08333C3.33333 8.25 6.31667 9.16667 10 9.16667C13.6833 9.16667 16.6667 8.25 16.6667 7.08333V5.41667C16.6667 4.25 13.6833 3.33333 10 3.33333ZM3.33333 8.75V11.25C3.33333 12.4167 6.31667 13.3333 10 13.3333C13.6833 13.3333 16.6667 12.4167 16.6667 11.25V8.75C16.6667 9.91667 13.6833 10.8333 10 10.8333C6.31667 10.8333 3.33333 9.91667 3.33333 8.75ZM3.33333 12.9167V15.4167C3.33333 16.5833 6.31667 17.5 10 17.5C13.6833 17.5 16.6667 16.5833 16.6667 15.4167V12.9167C16.6667 14.0833 13.6833 15 10 15C6.31667 15 3.33333 14.0833 3.33333 12.9167Z" fill="#84899F" />
        </g>
      </svg>
    </div>
  );
}

function AllCompaniesContent({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2] cursor-pointer ${isActive ? 'bg-[#f4f5f6]' : ''}`}
      data-name="Left content"
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[20px]" style={{ '--fill-0': '#84899F' } as React.CSSProperties}>
        <Business />
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">All companies</p>
      </div>
    </div>
  );
}

function AllCompaniesMenuItem({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className={`relative rounded-[3px] shrink-0 w-full ${isActive ? 'bg-[#f4f5f6]' : ''}`} data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[28px] pr-[8px] py-[8px] relative w-full">
          <AllCompaniesContent isActive={isActive} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function AllIndividualsContent({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2] cursor-pointer ${isActive ? 'bg-[#f4f5f6]' : ''}`}
      data-name="Left content"
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[20px]" style={{ '--fill-0': '#84899F' } as React.CSSProperties}>
        <Person />
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">All individuals</p>
      </div>
    </div>
  );
}

function AllIndividualsMenuItem({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className={`relative rounded-[3px] shrink-0 w-full ${isActive ? 'bg-[#f4f5f6]' : ''}`} data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[28px] pr-[8px] py-[8px] relative w-full">
          <AllIndividualsContent isActive={isActive} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function SideNav({ activeMenuItem, onMenuItemClick }: { activeMenuItem: string; onMenuItemClick: (item: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pb-0 pt-[24px] px-[8px] relative shrink-0 w-[295px]" data-name="Side nav">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <LeftNavLink isActive={activeMenuItem === 'portfolio'} onClick={() => onMenuItemClick('portfolio')} />
      <NavMenuItems isActive={activeMenuItem === 'tasks'} onClick={() => onMenuItemClick('tasks')} />
      <AllCompaniesMenuItem isActive={activeMenuItem === 'companies'} onClick={() => onMenuItemClick('companies')} />
      <AllIndividualsMenuItem isActive={activeMenuItem === 'individuals'} onClick={() => onMenuItemClick('individuals')} />
      <Content />
    </div>
  );
}

function Primary({ title }: { title: string }) {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Primary">
      <p className="font-['GT_America_VF:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3e4260] text-[22px] text-nowrap whitespace-pre">{title}</p>
    </div>
  );
}

function Text({ title }: { title: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <Primary title={title} />
    </div>
  );
}

function Lhs({ title }: { title: string }) {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="LHS">
      <Text title={title} />
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

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <FilterList />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Filter</p>
    </div>
  );
}

function ViewWeek() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="view_week">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="view_week">
          <path d={svgPaths.p9977d00} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CountTag() {
  return (
    <div className="bg-[#ecf0f3] h-[20px] relative rounded-[3px] shrink-0" data-name="count tag">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[2px] h-[20px] items-center px-[6px] py-0 relative">
        <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-center text-nowrap whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ViewWeek />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Columns</p>
      <CountTag />
    </div>
  );
}

function FuillPage() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Fuill_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Fuill_page">
          <path d={svgPaths.p24f6f80} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand_more">
          <path d={svgPaths.p1c0f0600} fill="var(--fill-0, #3E4260)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <FuillPage />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Full page</p>
      <ExpandMore />
    </div>
  );
}

function Actions({ showImportButton }: { showImportButton: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
      <Button2 />
      {showImportButton && <ImportActions />}
    </div>
  );
}

function Content1({ title, showImportButton }: { title: string; showImportButton: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Lhs title={title} />
      <Actions showImportButton={showImportButton} />
    </div>
  );
}

function Header({ title, showImportButton }: { title: string; showImportButton: boolean }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[24px] pr-[36px] py-[24px] relative w-full">
          <Content1 title={title} showImportButton={showImportButton} />
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">National number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">BVD ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Country code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Industry</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">NACE rev 2.1 core code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellHeaderCell7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Header Cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[13px] text-nowrap tracking-[0.5px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Operating revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HiddenTableHelpersHeaderGrid() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="_Hidden/Table/Helpers/Header Grid">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start pl-0 pr-[28px] py-0 relative w-full">
          <TableCellHeaderCell />
          <TableCellHeaderCell1 />
          <TableCellHeaderCell2 />
          <TableCellHeaderCell3 />
          <TableCellHeaderCell4 />
          <TableCellHeaderCell5 />
          <TableCellHeaderCell6 />
          <TableCellHeaderCell7 />
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table/Row">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <HiddenTableHelpersHeaderGrid />
      </div>
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCellCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Tesla, INC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell />
    </div>
  );
}

function TableCellCell1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">000027764648</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US912197729</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline />
    </div>
  );
}

function Iso1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso1 />
    </div>
  );
}

function Slot() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs />
      <Text1 />
    </div>
  );
}

function Country() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot />
    </div>
  );
}

function TableCellCell4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country />
        </div>
      </div>
    </div>
  );
}

function TableCellCell5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Wholesale and retail trade</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">8291</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$69.04 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn />
      <TableCellCell1 />
      <TableCellCell2 />
      <TableCellCell3 />
      <TableCellCell4 />
      <TableCellCell5 />
      <TableCellCell6 />
      <TableCellCell7 />
      <MoreMenuSpacer />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid />
    </div>
  );
}

function TableCellCell8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Apple Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell8 />
    </div>
  );
}

function TableCellCell9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000320193</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US0378331005</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline1() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline1 />
    </div>
  );
}

function Iso3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso3 />
    </div>
  );
}

function Slot1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs1 />
      <Text2 />
    </div>
  );
}

function Country1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot1 />
    </div>
  );
}

function TableCellCell12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country1 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell14() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">3571</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell15() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$2.71 Trillion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer1() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn1 />
      <TableCellCell9 />
      <TableCellCell10 />
      <TableCellCell11 />
      <TableCellCell12 />
      <TableCellCell13 />
      <TableCellCell14 />
      <TableCellCell15 />
      <MoreMenuSpacer1 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid1 />
    </div>
  );
}

function TableCellCell16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Amazon.com, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn2() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell16 />
    </div>
  );
}

function TableCellCell17() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell18() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001018724</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell19() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US0231351067</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline2() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline2 />
    </div>
  );
}

function Iso5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso5 />
    </div>
  );
}

function Slot2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs2 />
      <Text3 />
    </div>
  );
}

function Country2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot2 />
    </div>
  );
}

function TableCellCell20() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country2 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell21() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">E-commerce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell22() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">5961</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell23() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$1.46 Trillion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer2() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn2 />
      <TableCellCell17 />
      <TableCellCell18 />
      <TableCellCell19 />
      <TableCellCell20 />
      <TableCellCell21 />
      <TableCellCell22 />
      <TableCellCell23 />
      <MoreMenuSpacer2 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid2 />
    </div>
  );
}

function TableCellCell24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Microsoft Corporation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn3() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell24 />
    </div>
  );
}

function TableCellCell25() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell26() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000789019</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell27() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US5949181045</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline3() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline3 />
    </div>
  );
}

function Iso7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso6 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso7 />
    </div>
  );
}

function Slot3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs3 />
      <Text4 />
    </div>
  );
}

function Country3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot3 />
    </div>
  );
}

function TableCellCell28() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country3 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell29() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell30() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">7372</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell31() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$2.44 Trillion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer3() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid3() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn3 />
      <TableCellCell25 />
      <TableCellCell26 />
      <TableCellCell27 />
      <TableCellCell28 />
      <TableCellCell29 />
      <TableCellCell30 />
      <TableCellCell31 />
      <MoreMenuSpacer3 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid3 />
    </div>
  );
}

function TableCellCell32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Alphabet Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn4() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell32 />
    </div>
  );
}

function TableCellCell33() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell34() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001652044</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell35() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US02079K3059</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline4() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline4 />
    </div>
  );
}

function Iso9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso8 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso9 />
    </div>
  );
}

function Slot4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs4 />
      <Text5 />
    </div>
  );
}

function Country4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot4 />
    </div>
  );
}

function TableCellCell36() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country4 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell37() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell38() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">7373</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell39() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$1.54 Trillion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer4() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid4() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn4 />
      <TableCellCell33 />
      <TableCellCell34 />
      <TableCellCell35 />
      <TableCellCell36 />
      <TableCellCell37 />
      <TableCellCell38 />
      <TableCellCell39 />
      <MoreMenuSpacer4 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid4 />
    </div>
  );
}

function TableCellCell40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Berkshire Hathaway Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn5() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell40 />
    </div>
  );
}

function TableCellCell41() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell42() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001067983</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell43() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US0846707026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline5() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline5 />
    </div>
  );
}

function Iso11() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso10 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso11 />
    </div>
  );
}

function Slot5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs5 />
      <Text6 />
    </div>
  );
}

function Country5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot5 />
    </div>
  );
}

function TableCellCell44() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country5 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell45() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Diversified</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell46() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">6031</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell47() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$763.1 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer5() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn5 />
      <TableCellCell41 />
      <TableCellCell42 />
      <TableCellCell43 />
      <TableCellCell44 />
      <TableCellCell45 />
      <TableCellCell46 />
      <TableCellCell47 />
      <MoreMenuSpacer5 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid5 />
    </div>
  );
}

function TableCellCell48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Meta Platforms, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn6() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell48 />
    </div>
  );
}

function TableCellCell49() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell50() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001326801</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell51() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US30303M1027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline6() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline6 />
    </div>
  );
}

function Iso13() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso12 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso13 />
    </div>
  );
}

function Slot6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs6 />
      <Text7 />
    </div>
  );
}

function Country6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot6 />
    </div>
  );
}

function TableCellCell52() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country6 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell53() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell54() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">7374</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell55() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$837.99 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer6() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn6 />
      <TableCellCell49 />
      <TableCellCell50 />
      <TableCellCell51 />
      <TableCellCell52 />
      <TableCellCell53 />
      <TableCellCell54 />
      <TableCellCell55 />
      <MoreMenuSpacer6 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid6 />
    </div>
  );
}

function TableCellCell56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">NVIDIA Corporation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn7() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell56 />
    </div>
  );
}

function TableCellCell57() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell58() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001045810</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell59() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US67066G1040</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline7() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline7 />
    </div>
  );
}

function Iso15() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso14 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso15 />
    </div>
  );
}

function Slot7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs7 />
      <Text8 />
    </div>
  );
}

function Country7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot7 />
    </div>
  );
}

function TableCellCell60() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country7 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell61() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell62() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">3571</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell63() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$1.11 Trillion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer7() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid7() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn7 />
      <TableCellCell57 />
      <TableCellCell58 />
      <TableCellCell59 />
      <TableCellCell60 />
      <TableCellCell61 />
      <TableCellCell62 />
      <TableCellCell63 />
      <MoreMenuSpacer7 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid7 />
    </div>
  );
}

function TableCellCell64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">{`Johnson & Johnson`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn8() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell64 />
    </div>
  );
}

function TableCellCell65() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell66() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000200406</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell67() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US4781601046</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs8() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline8() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline8 />
    </div>
  );
}

function Iso17() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso16 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso17 />
    </div>
  );
}

function Slot8() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs8 />
      <Text9 />
    </div>
  );
}

function Country8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot8 />
    </div>
  );
}

function TableCellCell68() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country8 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell69() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Pharmaceuticals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell70() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">2834</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell71() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$455.25 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer8() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid8() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn8 />
      <TableCellCell65 />
      <TableCellCell66 />
      <TableCellCell67 />
      <TableCellCell68 />
      <TableCellCell69 />
      <TableCellCell70 />
      <TableCellCell71 />
      <MoreMenuSpacer8 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid8 />
    </div>
  );
}

function TableCellCell72() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Visa Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn9() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell72 />
    </div>
  );
}

function TableCellCell73() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell74() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001403161</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell75() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US92826C8394</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs9() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline9() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline9 />
    </div>
  );
}

function Iso19() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso18 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso19 />
    </div>
  );
}

function Slot9() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs9 />
      <Text10 />
    </div>
  );
}

function Country9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot9 />
    </div>
  );
}

function TableCellCell76() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country9 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell77() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Financial Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell78() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">6021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell79() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$454.49 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer9() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid9() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn9 />
      <TableCellCell73 />
      <TableCellCell74 />
      <TableCellCell75 />
      <TableCellCell76 />
      <TableCellCell77 />
      <TableCellCell78 />
      <TableCellCell79 />
      <MoreMenuSpacer9 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid9 />
    </div>
  );
}

function TableCellCell80() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">{`Procter & Gamble Co.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn10() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell80 />
    </div>
  );
}

function TableCellCell81() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell82() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000082564</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell83() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US7427181091</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs10() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline10() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline10 />
    </div>
  );
}

function Iso21() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso20 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso21 />
    </div>
  );
}

function Slot10() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs10 />
      <Text11 />
    </div>
  );
}

function Country10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot10 />
    </div>
  );
}

function TableCellCell84() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country10 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell85() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Consumer Goods</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell86() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">2844</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell87() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$393.29 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer10() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid10() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn10 />
      <TableCellCell81 />
      <TableCellCell82 />
      <TableCellCell83 />
      <TableCellCell84 />
      <TableCellCell85 />
      <TableCellCell86 />
      <TableCellCell87 />
      <MoreMenuSpacer10 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid10 />
    </div>
  );
}

function TableCellCell88() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Walmart Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn11() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell88 />
    </div>
  );
}

function TableCellCell89() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell90() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000104169</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell91() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US9311421039</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline11() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline11 />
    </div>
  );
}

function Iso23() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso22 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso23 />
    </div>
  );
}

function Slot11() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs11 />
      <Text12 />
    </div>
  );
}

function Country11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot11 />
    </div>
  );
}

function TableCellCell92() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country11 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell93() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Retail</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell94() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">5311</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell95() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$392.3 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer11() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid11() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn11 />
      <TableCellCell89 />
      <TableCellCell90 />
      <TableCellCell91 />
      <TableCellCell92 />
      <TableCellCell93 />
      <TableCellCell94 />
      <TableCellCell95 />
      <MoreMenuSpacer11 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid11 />
    </div>
  );
}

function TableCellCell96() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Coca-Cola Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn12() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell96 />
    </div>
  );
}

function TableCellCell97() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell98() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000021344</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell99() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US1912161007</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs12() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline12() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline12 />
    </div>
  );
}

function Iso25() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso24 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso25 />
    </div>
  );
}

function Slot12() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs12 />
      <Text13 />
    </div>
  );
}

function Country12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot12 />
    </div>
  );
}

function TableCellCell100() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country12 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell101() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Beverages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell102() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">2086</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell103() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$264.42 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer12() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid12() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn12 />
      <TableCellCell97 />
      <TableCellCell98 />
      <TableCellCell99 />
      <TableCellCell100 />
      <TableCellCell101 />
      <TableCellCell102 />
      <TableCellCell103 />
      <MoreMenuSpacer12 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid12 />
    </div>
  );
}

function TableCellCell104() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">PepsiCo, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn13() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell104 />
    </div>
  );
}

function TableCellCell105() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell106() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000077476</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell107() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US7134481081</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs13() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline13() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline13 />
    </div>
  );
}

function Iso27() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso26 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso27 />
    </div>
  );
}

function Slot13() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs13 />
      <Text14 />
    </div>
  );
}

function Country13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot13 />
    </div>
  );
}

function TableCellCell108() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country13 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell109() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Beverages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell110() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">2086</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell111() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$247.09 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer13() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid13() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn13 />
      <TableCellCell105 />
      <TableCellCell106 />
      <TableCellCell107 />
      <TableCellCell108 />
      <TableCellCell109 />
      <TableCellCell110 />
      <TableCellCell111 />
      <MoreMenuSpacer13 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid13 />
    </div>
  );
}

function TableCellCell112() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Intel Corporation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn14() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell112 />
    </div>
  );
}

function TableCellCell113() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell114() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0000050863</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell115() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US4581401001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs14() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline14() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline14 />
    </div>
  );
}

function Iso29() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso28 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso29 />
    </div>
  );
}

function Slot14() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs14 />
      <Text15 />
    </div>
  );
}

function Country14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot14 />
    </div>
  );
}

function TableCellCell116() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country14 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell117() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Semiconductors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell118() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">3674</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell119() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$176.68 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer14() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid14() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn14 />
      <TableCellCell113 />
      <TableCellCell114 />
      <TableCellCell115 />
      <TableCellCell116 />
      <TableCellCell117 />
      <TableCellCell118 />
      <TableCellCell119 />
      <MoreMenuSpacer14 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid14 />
    </div>
  );
}

function TableCellCell120() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn15() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell120 />
    </div>
  );
}

function TableCellCell121() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell122() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001065280</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell123() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US64110L1061</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs15() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline15() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline15 />
    </div>
  );
}

function Iso31() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso30 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso31 />
    </div>
  );
}

function Slot15() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs15 />
      <Text16 />
    </div>
  );
}

function Country15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot15 />
    </div>
  );
}

function TableCellCell124() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country15 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell125() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Entertainment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell126() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">7833</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell127() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$234.29 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer15() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid15() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn15 />
      <TableCellCell121 />
      <TableCellCell122 />
      <TableCellCell123 />
      <TableCellCell124 />
      <TableCellCell125 />
      <TableCellCell126 />
      <TableCellCell127 />
      <MoreMenuSpacer15 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid15 />
    </div>
  );
}

function TableCellCell128() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Salesforce, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstColumn16() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="First Column">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellCell128 />
    </div>
  );
}

function TableCellCell129() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell130() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">0001274500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell131() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="leading-[24px]">US79466L3024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagUs16() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="flag/US">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_31_21960)" id="flag/US">
          <path d="M0 0H18V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2d0f8380} fill="var(--fill-0, #D80027)" id="Vector_2" />
          </g>
          <path d="M0 0H9V6.45965H0V0Z" fill="var(--fill-0, #2E52B2)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p13cbfa00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_21960">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Underline16() {
  return (
    <div className="h-[2px] relative shrink-0 w-[26px]" data-name="Underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
        <g id="Underline">
          <circle cx="1" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 1" r="1" />
          <circle cx="5" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 2" r="1" />
          <circle cx="9" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 3" r="1" />
          <circle cx="13" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 4" r="1" />
          <circle cx="17" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 5" r="1" />
          <circle cx="21" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 6" r="1" />
          <circle cx="25" cy="1" fill="var(--fill-0, #84899F)" id="Ellipse 7" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Iso32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ISO">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-center w-[29px]">
        <p className="leading-[24px]">USA</p>
      </div>
      <Underline16 />
    </div>
  );
}

function Iso33() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="ISO +1">
      <Iso32 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Text">
      <Iso33 />
    </div>
  );
}

function Slot16() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Slot">
      <FlagUs16 />
      <Text17 />
    </div>
  );
}

function Country16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Country">
      <Slot16 />
    </div>
  );
}

function TableCellCell132() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative size-full">
          <Country16 />
        </div>
      </div>
    </div>
  );
}

function TableCellCell133() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell134() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative size-full">
          <div className="-webkit-box basis-0 css-a2i896 flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#37474f] text-[14px]">
            <p className="leading-[24px]">7372</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellCell135() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Table/Cell/Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[10px] py-[12px] relative size-full">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap text-right">
            <p className="leading-[24px] whitespace-pre">$216.66 Billion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuSpacer16() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="More Menu Spacer">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HiddenTableHelpersRowGrid16() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_HiddenTable/Helpers/Row Grid">
      <FirstColumn16 />
      <TableCellCell129 />
      <TableCellCell130 />
      <TableCellCell131 />
      <TableCellCell132 />
      <TableCellCell133 />
      <TableCellCell134 />
      <TableCellCell135 />
      <MoreMenuSpacer16 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <HiddenTableHelpersRowGrid16 />
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="basis-0 flex flex-col font-['GT_America:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#646882] text-[14px]">
        <p className="leading-[24px]">1 to 25 of 200 items</p>
      </div>
    </div>
  );
}

function ExpandMore1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand_more">
          <path d={svgPaths.p1c0f0600} fill="var(--fill-0, #3E4260)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">25</p>
      <ExpandMore1 />
    </div>
  );
}

function ItemCountControl() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Item count control">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Items per page</p>
      </div>
      <Button3 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron_left">
          <path d={svgPaths.p19eaa580} fill="var(--fill-0, #AEB2BC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-bl-[3px] rounded-tl-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d5d7dd] border-[1px_0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[3px] rounded-tl-[3px]" />
      <ChevronLeft />
    </div>
  );
}

function ChevronRight17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron_right">
          <path d={svgPaths.p332a0b00} fill="var(--fill-0, #78909C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-br-[3px] rounded-tr-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-br-[3px] rounded-tr-[3px]" />
      <ChevronRight17 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Pagination">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right">
      <ItemCountControl />
      <Pagination />
    </div>
  );
}

function PaginationFull() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Pagination - full">
      <Left />
      <Right />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Table/Row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[10px] py-[12px] relative w-full">
          <PaginationFull />
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[14px] pr-[36px] py-0 relative w-full">
          <TableRow />
          <TableRow1 />
          <TableRow2 />
          <TableRow3 />
          <TableRow4 />
          <TableRow5 />
          <TableRow6 />
          <TableRow7 />
          <TableRow8 />
          <TableRow9 />
          <TableRow10 />
          <TableRow11 />
          <TableRow12 />
          <TableRow13 />
          <TableRow14 />
          <TableRow15 />
          <TableRow16 />
          <TableRow17 />
          <TableRow18 />
        </div>
      </div>
    </div>
  );
}

function Page({ title, showImportButton }: { title: string; showImportButton: boolean }) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Page">
      <Header title={title} showImportButton={showImportButton} />
      <Table />
    </div>
  );
}

export default function Frame812143() {
  const [activeMenuItem, setActiveMenuItem] = useState('portfolio');

  const getPageTitle = () => {
    switch (activeMenuItem) {
      case 'portfolio':
        return 'Portfolio';
      case 'tasks':
        return 'Tasks';
      case 'companies':
        return 'All companies';
      case 'individuals':
        return 'All individuals';
      default:
        return 'Portfolio';
    }
  };

  const showImportButton = activeMenuItem === 'companies' || activeMenuItem === 'individuals';

  return (
    <div className="content-stretch flex items-start relative size-full">
      <SideNav activeMenuItem={activeMenuItem} onMenuItemClick={setActiveMenuItem} />
      <Page title={getPageTitle()} showImportButton={showImportButton} />
    </div>
  );
}