import svgPaths from "./svg-k1boe97dks";

function MoodysLogo1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96.548px] z-[2]" data-name="Moody\'s Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 16">
        <g clipPath="url(#clip0_4_8393)" id="Moody\'s Logo">
          <path d={svgPaths.p72f1a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_8393">
            <rect fill="white" height="16" width="96.5483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MoodysLogoNew1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] isolate items-center justify-center relative shrink-0 w-full" data-name="moody\'s logo/new">
      <MoodysLogo1 />
    </div>
  );
}

function Frame812201() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[32px] py-0 relative shrink-0">
      <MoodysLogoNew1 />
    </div>
  );
}

function GlobalNavLink() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0" data-name="Global nav link">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Views</p>
    </div>
  );
}

function GlobalNavLink1() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0" data-name="Global nav link">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Reports</p>
    </div>
  );
}

function GlobalNavLink2() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0" data-name="Global nav link">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Users</p>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="box-border content-stretch flex gap-[22px] h-[60px] items-center px-0 py-[8px] relative shrink-0" data-name="Menu-items">
      <GlobalNavLink />
      <GlobalNavLink1 />
      <GlobalNavLink2 />
    </div>
  );
}

function LogoAndMenu() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo and menu">
      <Frame812201 />
      <MenuItems />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="search">
          <path d={svgPaths.p1e543700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Element() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Element">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <ElementLeft />
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[0px] text-[14px] text-nowrap text-white whitespace-pre">
          <span className="font-['GT_America:Medium',_sans-serif]">Search</span>
          <span>{` for an entity...`}</span>
        </p>
      </div>
    </div>
  );
}

function InputArea() {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] relative rounded-[999px] shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[17px] py-[8px] relative w-full">
          <TextIcon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.22)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-w-[680px] min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="Input">
      <InputArea />
    </div>
  );
}

function Search1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Search">
      <Input />
    </div>
  );
}

function Language() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="language">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="language">
          <path d={svgPaths.pf131d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-bl-[3px] rounded-tl-[3px] shrink-0" data-name="Button">
      <Language />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">EN</p>
    </div>
  );
}

function HelpOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="help_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="help_outline">
          <path d={svgPaths.p150d0900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-bl-[3px] rounded-tl-[3px] shrink-0" data-name="Button">
      <HelpOutline />
    </div>
  );
}

function Person() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="person">
          <path d={svgPaths.p16a54fb0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-br-[3px] rounded-tr-[3px] shrink-0" data-name="Button">
      <Person />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Actions">
      <Buttons />
    </div>
  );
}

function GlobalAppHeaderEvo() {
  return (
    <div className="bg-[#0a1264] h-[64px] relative shrink-0 w-full" data-name="Global app header evo">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[32px] h-[64px] items-center px-[36px] py-0 relative w-full">
          <LogoAndMenu />
          <Search1 />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Data management</p>
      </div>
    </div>
  );
}

function ExpandLess() {
  return (
    <div className="relative shrink-0 size-[20px] z-[1]" data-name="expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand_less">
          <path d={svgPaths.p3fdd67f2} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavMenuItems() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[32px] pr-[8px] py-[4px] relative w-full">
          <LeftContent />
          <ExpandLess />
        </div>
      </div>
    </div>
  );
}

function DataObject() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="data_object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="data_object">
          <g id="Vector">
            <path d={svgPaths.p3cc93100} fill="#84899F" />
            <path d={svgPaths.p319ec740} fill="#84899F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <DataObject />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Data providers</p>
      </div>
    </div>
  );
}

function NavMenuItems1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[44px] pr-[8px] py-[4px] relative w-full">
          <LeftContent1 />
        </div>
      </div>
    </div>
  );
}

function FileUpload1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file_upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file_upload">
          <path d={svgPaths.p31675930} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <FileUpload1 />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Data imports</p>
      </div>
    </div>
  );
}

function NavMenuItems2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[44px] pr-[8px] py-[4px] relative w-full">
          <LeftContent2 />
        </div>
      </div>
    </div>
  );
}

function TableChart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="table_chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table_chart">
          <path d={svgPaths.p3527bc00} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <TableChart />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Schema</p>
      </div>
    </div>
  );
}

function NavMenuItems3() {
  return (
    <div className="bg-[#f4f5f6] relative rounded-[4px] shrink-0 w-full" data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[44px] pr-[8px] py-[4px] relative w-full">
          <LeftContent3 />
        </div>
      </div>
    </div>
  );
}

function DataObject1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="data_object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="data_object">
          <g id="Vector">
            <path d={svgPaths.p3cc93100} fill="#84899F" />
            <path d={svgPaths.p319ec740} fill="#84899F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftContent4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <DataObject1 />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Variables</p>
      </div>
    </div>
  );
}

function NavMenuItems4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[44px] pr-[8px] py-[4px] relative w-full">
          <LeftContent4 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <NavMenuItems />
      <NavMenuItems1 />
      <NavMenuItems2 />
      <NavMenuItems3 />
      <NavMenuItems4 />
      <div className="h-[24px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 24">
            <path d="M1 0V24" id="Vector 69" stroke="var(--stroke-0, #84899F)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return <div className="basis-0 grow min-h-px min-w-px rounded-[4px] shrink-0 w-full" data-name="Content" />;
}

function SideNav() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pb-0 pt-[24px] px-[8px] relative shrink-0 w-[295px]" data-name="Side nav">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Content />
      <Content1 />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add">
          <path d={svgPaths.p121ff280} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Add />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Create a new table</p>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[102px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[102px] items-center p-[16px] relative w-full">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Entity</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[22.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[22.203px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[299px]" data-name="Button">
      <Button4 />
      <Text />
      <Text1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Medium',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Business Unit</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[21.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[21.953px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#eceff1] box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[278px]" data-name="Button">
      <Button6 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Product</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[21.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[21.953px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[257px]" data-name="Button">
      <Button8 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Purchase</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[21.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[21.922px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[236px]" data-name="Button">
      <Button10 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Invoice</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[22.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[22.203px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[215px]" data-name="Button">
      <Button12 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Button14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[14px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Payment</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[21.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[21.953px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[194px]" data-name="Button">
      <Button14 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[42px] left-[21px] top-[42px] w-[194px]" data-name="List Item">
      <Button15 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[84px] left-[21px] top-[42px] w-[215px]" data-name="List Item">
      <Button13 />
      <ListItem />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[126px] left-[21px] top-[42px] w-[236px]" data-name="List Item">
      <Button11 />
      <ListItem1 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[168px] left-[21px] top-[42px] w-[257px]" data-name="List Item">
      <Button9 />
      <ListItem2 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[210px] relative shrink-0 w-full" data-name="List Item">
      <Button7 />
      <ListItem3 />
    </div>
  );
}

function Button16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[14px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[22.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[22.203px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center left-0 px-[10.5px] py-0 top-0 w-[278px]" data-name="Button">
      <Button16 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="List Item">
      <Button17 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col h-[252px] items-start left-[21px] top-[42px] w-[278px]" data-name="List">
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[294px] relative shrink-0 w-full" data-name="List Item">
      <Button5 />
      <List />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Individual</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[22.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[22.203px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center px-[10.5px] py-0 relative shrink-0 w-[299px]" data-name="Button">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Button18 />
        </div>
      </div>
      <Text14 />
      <Text15 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #78909C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[14px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#3e4260] text-[14px] text-nowrap top-[-1px] whitespace-pre">Key-value tables</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#eceff1] h-[24.5px] relative rounded-[10px] shrink-0 w-[22.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[22.203px]">
        <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[21px] left-[7px] not-italic text-[#78909c] text-[14px] text-nowrap top-[0.75px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] h-[42px] items-center px-[10.5px] py-0 relative shrink-0 w-[299px]" data-name="Button">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Button20 />
        </div>
      </div>
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-[299px]" data-name="Container">
      <ListItem6 />
      <Button19 />
      <Button21 />
    </div>
  );
}

function SideNavigation() {
  return (
    <div className="content-stretch flex flex-col h-[814px] items-start relative shrink-0 w-[300px]" data-name="Side navigation">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0" />
      <Section />
      <Container />
    </div>
  );
}

function Primary() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Primary">
      <p className="font-['GT_America_VF:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3e4260] text-[18px] text-nowrap whitespace-pre">Business unit</p>
    </div>
  );
}

function LowPriority() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="low_priority">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="low_priority"></g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center p-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <LowPriority />
    </div>
  );
}

function SourceDisplayDefaultDeprecated() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0" data-name="Source display/Default deprecated">
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Child of Entity `}</span>
          <span className="text-[#d5d7dd]">|</span>
          <span className="text-[#646882]"> </span>One-to-many
        </p>
      </div>
      <Button22 />
    </div>
  );
}

function Text18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <Primary />
      <SourceDisplayDefaultDeprecated />
    </div>
  );
}

function Lhs() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="LHS">
      <Text18 />
    </div>
  );
}

function FileUpload2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file_upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file_upload">
          <path d={svgPaths.p36108b80} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <FileUpload2 />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit">
          <path d={svgPaths.p31cc4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Edit />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Actions">
      <Button23 />
      <Button24 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Lhs />
      <Actions1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[24px] pr-[36px] py-[24px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <p className="font-['GT_America_VF:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3e4260] text-[18px] text-nowrap whitespace-pre">Custom fields</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Wrapper />
    </div>
  );
}

function Button25() {
  return <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] rounded-[3px] shrink-0" data-name="Button" />;
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add">
          <path d={svgPaths.p121ff280} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Add1 />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Create a custom field</p>
    </div>
  );
}

function HeadingBlock() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Heading block">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Wrapper1 />
      </div>
      <Button25 />
      <Button26 />
    </div>
  );
}

function DragIndicator() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-0 w-[203.371px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 relative w-[262px]" data-name="Container">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">BvD ID</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Container">
      <Container2 />
      <p className="[grid-area:1_/_1] font-['GT_America:Regular',_sans-serif] leading-[24px] ml-0 mt-[24px] not-italic relative text-[#3e4260] text-[14px] w-[104.434px]">Required</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="link">
          <path d={svgPaths.p23544900} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <Link />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#d5e4f8] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Tag">
      <Icon8 />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#113b61] text-[14px] text-center text-nowrap whitespace-pre">Foreign key</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Tag />
    </div>
  );
}

function Edit1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit">
          <path d={svgPaths.p31cc4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Edit1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-[202px]" data-name="Container">
      <AddRiskFactor2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <DragIndicator />
          <Container4 />
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function DragIndicator1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-0 w-[203.371px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 relative w-[262px]" data-name="Container">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Business unit name</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Container">
      <Container9 />
      <p className="[grid-area:1_/_1] font-['GT_America:Regular',_sans-serif] leading-[24px] ml-0 mt-[24px] not-italic relative text-[#3e4260] text-[14px] w-[104.434px]">Required</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Key() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="key">
          <path d={svgPaths.p1f319900} fill="var(--fill-0, #113B61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <Key />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#ccecea] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Tag">
      <Icon9 />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#004641] text-[14px] text-center text-nowrap whitespace-pre">Primary key</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Tag1 />
    </div>
  );
}

function Edit2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit">
          <path d={svgPaths.p31cc4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Edit2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-[202px]" data-name="Container">
      <AddRiskFactor5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <DragIndicator1 />
          <Container11 />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function DragIndicator2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-0 w-[203.371px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 relative w-[262px]" data-name="Container">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Annual revenue</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Container">
      <Container16 />
      <p className="[grid-area:1_/_1] font-['GT_America:Regular',_sans-serif] leading-[24px] ml-0 mt-[24px] not-italic relative text-[#3e4260] text-[14px] w-[104.434px]">Optional</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#ecf0f3] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Tag">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-center text-nowrap whitespace-pre">Money value</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Tag2 />
    </div>
  );
}

function Edit3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit">
          <path d={svgPaths.p31cc4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Edit3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-[202px]" data-name="Container">
      <AddRiskFactor8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <DragIndicator2 />
          <Container18 />
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function DragIndicator3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-0 w-[203.371px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 relative w-[262px]" data-name="Container">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Operating region</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Container">
      <Container23 />
      <p className="[grid-area:1_/_1] font-['GT_America:Regular',_sans-serif] leading-[24px] ml-0 mt-[24px] not-italic relative text-[#3e4260] text-[14px] w-[104.434px]">Optional</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#ecf0f3] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Tag">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-center text-nowrap whitespace-pre">String</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Tag3 />
    </div>
  );
}

function Edit4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit">
          <path d={svgPaths.p31cc4800} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Edit4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-[202px]" data-name="Container">
      <AddRiskFactor11 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <DragIndicator3 />
          <Container25 />
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <HeadingBlock />
          <Container7 />
          <Container14 />
          <Container21 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[814px] items-start min-h-px min-w-px relative shrink-0" data-name="Page">
      <Header />
      <ContentContainer />
    </div>
  );
}

function Frame812143() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <SideNav />
      <SideNavigation />
      <Page />
    </div>
  );
}

function ModalBackground() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[898px] left-0 top-0 w-[1440px]" data-name="Modal background" />;
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="bg-[#ecf0f3] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Title bar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['GT_America_VF:Medium',_sans-serif] font-medium grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[18px] text-nowrap">Create new table</p>
          <Close />
        </div>
      </div>
    </div>
  );
}

function Requird() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[55px]" data-name="Requird">
      <p className="absolute font-['Bliss_Pro:Medium',_sans-serif] leading-[14.2px] not-italic right-[54px] text-[#d30d35] text-[12px] top-px translate-x-[100%] w-[54px]">- required</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3e4260] text-[13px] text-nowrap whitespace-pre">Table name</p>
      <Requird />
    </div>
  );
}

function Label7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Label">
      <Label6 />
    </div>
  );
}

function TextIcon3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Entity</p>
      </div>
    </div>
  );
}

function InputArea3() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[9px] py-[4px] relative w-full">
          <TextIcon3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
      <Label7 />
      <InputArea3 />
    </div>
  );
}

function Requird1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[55px]" data-name="Requird">
      <p className="absolute font-['Bliss_Pro:Medium',_sans-serif] leading-[14.2px] not-italic right-[54px] text-[#d30d35] text-[12px] top-px translate-x-[100%] w-[54px]">- required</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3e4260] text-[13px] text-nowrap whitespace-pre">Developer name</p>
      <Requird1 />
    </div>
  );
}

function Label9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Label">
      <Label8 />
    </div>
  );
}

function TextIcon4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">entity</p>
      </div>
    </div>
  );
}

function InputArea4() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[9px] py-[4px] relative w-full">
          <TextIcon4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
      <Label9 />
      <InputArea4 />
    </div>
  );
}

function Requird2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[55px]" data-name="Requird">
      <p className="absolute font-['Bliss_Pro:Medium',_sans-serif] leading-[14.2px] not-italic right-[54px] text-[#d30d35] text-[12px] top-px translate-x-[100%] w-[54px]">- required</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3e4260] text-[13px] text-nowrap whitespace-pre">Parent table</p>
      <Requird2 />
    </div>
  );
}

function Label11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Label">
      <Label10 />
    </div>
  );
}

function TextIcon5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Key-value tables</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p192a00} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Element7() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0" data-name="Element">
      <KeyboardArrowDown />
    </div>
  );
}

function ElementRight1() {
  return (
    <div className="relative shrink-0" data-name="Element right">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Element7 />
      </div>
    </div>
  );
}

function InputArea5() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[9px] py-[4px] relative w-full">
          <TextIcon5 />
          <ElementRight1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start relative shrink-0 w-full" data-name="Input">
      <Label11 />
      <InputArea5 />
    </div>
  );
}

function HiddenRadio() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="_Hidden/Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="_Hidden/Radio">
          <g id="Vector">
            <path d={svgPaths.p38de5a30} fill="#2062D5" />
            <path d={svgPaths.p1426c1f0} fill="#2062D5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Value">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] w-full">Values only</p>
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio">
      <HiddenRadio />
      <Value />
    </div>
  );
}

function HiddenRadio1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="_Hidden/Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="_Hidden/Radio">
          <path d={svgPaths.p38de5a30} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Value">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] w-full">Values and identifiers</p>
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio">
      <HiddenRadio1 />
      <Value1 />
    </div>
  );
}

function HiddenRadio2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="_Hidden/Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="_Hidden/Radio">
          <path d={svgPaths.p38de5a30} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Value">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] w-full">Values heirarchal identifiers</p>
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio">
      <HiddenRadio2 />
      <Value2 />
    </div>
  );
}

function Frame675679960() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Radio />
      <Radio1 />
      <Radio2 />
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3e4260] text-[13px] w-[98px]">Fields</p>
      <Frame675679960 />
    </div>
  );
}

function Frame675679948() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Input3 />
      <Input4 />
      <Input5 />
      <Frame387 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame675679948 />
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Secondary">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function Primary1() {
  return (
    <div className="bg-[#2062d5] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Primary">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Create table</p>
    </div>
  );
}

function FooterBar() {
  return (
    <div className="bg-[#ecf0f3] relative rounded-bl-[3px] rounded-br-[3px] shrink-0 w-full" data-name="Footer bar">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[8px] relative w-full">
          <Secondary />
          <Primary1 />
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[224px] items-start left-[451px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)] top-[237px] w-[600px]" data-name="Modal">
      <TitleBar />
      <Content3 />
      <FooterBar />
    </div>
  );
}

export default function CreateNewTableKeyValueTable() {
  return (
    <div className="bg-white relative size-full" data-name="Create new table - key value table">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <GlobalAppHeaderEvo />
        <Frame812143 />
        <ModalBackground />
        <Modal />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}