import svgPaths from "./svg-w63v5ilo2i";

function MoodysLogo1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96.548px] z-[2]" data-name="Moody\'s Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 16">
        <g clipPath="url(#clip0_1_7898)" id="Moody\'s Logo">
          <path d={svgPaths.p72f1a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7898">
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

function Logo() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[32px] py-0 relative shrink-0" data-name="Logo">
      <MoodysLogoNew1 />
    </div>
  );
}

function GlobalNavLink() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0" data-name="Global nav link">
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

function GlobalNavLink3() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0" data-name="Global nav link">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Configuration</p>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="box-border content-stretch flex gap-[22px] h-[60px] items-center px-0 py-[8px] relative shrink-0" data-name="Menu-items">
      <GlobalNavLink />
      <GlobalNavLink1 />
      <GlobalNavLink2 />
      <GlobalNavLink3 />
    </div>
  );
}

function LogoAndMenu() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo and menu">
      <Logo />
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
          <path d={svgPaths.pedfd980} fill="var(--fill-0, #84899F)" id="Vector" />
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

function TableChart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="table_chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table_chart">
          <path d={svgPaths.p24778f40} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <TableChart />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Tables</p>
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

function FormatShapes() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="format_shapes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_7846)" id="format_shapes">
          <path d={svgPaths.p8214700} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7846">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <FormatShapes />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Custom fields</p>
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

function DataObject() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="data_object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="data_object">
          <g id="Vector">
            <path d={svgPaths.p2ef147c0} fill="#84899F" />
            <path d={svgPaths.p11a91280} fill="#84899F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <DataObject />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Variables</p>
      </div>
    </div>
  );
}

function NavMenuItems3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Nav / Menu items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] isolate items-center pl-[44px] pr-[8px] py-[4px] relative w-full">
          <LeftContent3 />
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
          <path d={svgPaths.p38533780} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftContent4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Left content">
      <FileUpload1 />
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">Import data</p>
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

function SectionHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Section header">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[16px] text-nowrap whitespace-pre">Risk models</p>
    </div>
  );
}

function Primary() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Primary">
      <SectionHeader />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
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

function Content2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Lhs />
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
    </div>
  );
}

function Section() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[80px] items-center p-[16px] relative w-full">
          <Content2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function TextIcon2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Search for a risk model</p>
      </div>
    </div>
  );
}

function Search4() {
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

function Element3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0" data-name="Element">
      <Search4 />
    </div>
  );
}

function ElementRight() {
  return (
    <div className="relative shrink-0" data-name="Element right">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <Element3 />
      </div>
    </div>
  );
}

function InputArea2() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-full" data-name="Input area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[9px] py-[4px] relative w-full">
          <TextIcon2 />
          <ElementRight />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputArea2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[16px] relative w-full">
          <Input2 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3e4260] text-[14px]" data-name="Text">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Risk model 1</p>
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Basic risk assessment for suppliers</p>
      </div>
    </div>
  );
}

function NavSecondaryLink() {
  return (
    <div className="bg-[#ecf0f3] relative shrink-0 w-full" data-name="Nav / Secondary link">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center p-[16px] relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3e4260] text-[14px]" data-name="Text">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Risk model 1</p>
      </div>
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Risk model description</p>
      </div>
    </div>
  );
}

function NavSecondaryLink1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Nav / Secondary link">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center p-[16px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function SideNavigation() {
  return (
    <div className="content-stretch flex flex-col h-[1392px] items-start relative shrink-0 w-[300px]" data-name="Side navigation">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0" />
      <Section />
      <Section1 />
      <NavSecondaryLink />
      <NavSecondaryLink1 />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Section title">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[16px] text-nowrap whitespace-pre">Risk model 1</p>
    </div>
  );
}

function Primary1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Primary">
      <SectionTitle />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <Primary1 />
    </div>
  );
}

function TextIcon3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Basic risk assessment for suppliers|</p>
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
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[400px]" data-name="Input">
      <InputArea3 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Section header">
      <Text3 />
      <Input3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2062d5] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Save</p>
    </div>
  );
}

function ContentCopy() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="content_copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content_copy">
          <path d={svgPaths.p27b8e180} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <ContentCopy />
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="delete">
          <path d={svgPaths.p2e54fe00} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Delete />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionHeader1 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.pd9ec680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#2062d5] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[6px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Check />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="close">
          <path d={svgPaths.p33817400} fill="var(--fill-0, #78909C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[6px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Close />
    </div>
  );
}

function Frame812205() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[364px] top-[92px]">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[36px] pr-[24px] py-[24px] relative w-full">
          <Content3 />
          <Frame812205 />
        </div>
      </div>
    </div>
  );
}

function TextFrame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[62px] items-center justify-center overflow-clip pb-[19px] pt-[20px] px-[16px] relative shrink-0" data-name="Text frame">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Risk factors</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Tabs">
      <TextFrame />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Border">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 2">
          <path d="M0 0H110V2H0V0Z" fill="var(--fill-0, #646882)" id="Border" />
        </svg>
      </div>
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[64px] items-center overflow-clip pb-[21px] pt-[20px] px-[16px] relative shrink-0" data-name="Text frame">
      <div className="flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646882] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Risk levels</p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0" data-name="Tabs">
      <TextFrame1 />
    </div>
  );
}

function StatusIndicator() {
  return (
    <div className="relative shrink-0 w-full" data-name="Status indicator">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[32px] py-0 relative w-full">
          <Tabs />
          <Tabs1 />
        </div>
      </div>
    </div>
  );
}

function Add1() {
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

function AddRiskFactor() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Add1 />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Add risk factor</p>
    </div>
  );
}

function CreateNewFolder() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="create_new_folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="create_new_folder">
          <path d={svgPaths.p31a43b00} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <CreateNewFolder />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Create group</p>
    </div>
  );
}

function ConfigureActions() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-start ml-0 mt-[64px] relative" data-name="Configure actions">
      <AddRiskFactor />
      <AddRiskFactor1 />
    </div>
  );
}

function ConfigureRiskFactors() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Configure risk factors">
      <p className="[grid-area:1_/_1] font-['GT_America:Medium',_sans-serif] leading-[24px] ml-0 mt-0 not-italic relative text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Configure risk factors</p>
      <p className="[grid-area:1_/_1] font-['GT_America:Regular',_sans-serif] leading-[24px] ml-0 mt-[32px] not-italic relative text-[#3e4260] text-[14px] text-nowrap whitespace-pre">The entity data is evaluated against these risk factors to calculate a total risk score.</p>
      <ConfigureActions />
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

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3e4260] text-[13px] text-nowrap whitespace-pre">Group name</p>
      <Requird />
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
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">&nbsp;</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[768px]" data-name="Input">
      <Label9 />
      <InputArea4 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3e4260] text-[13px] text-nowrap whitespace-pre">Scoring rule</p>
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
        <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">The risk factor with the highest single risk score will be the risk score</p>
      </div>
    </div>
  );
}

function Element7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Element">
          <path d={svgPaths.p3fa7a300} fill="var(--fill-0, #3E4260)" id="Vector" />
        </g>
      </svg>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[768px]" data-name="Input">
      <Label11 />
      <InputArea5 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646882] text-[14px] text-nowrap whitespace-pre">Create group</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button9 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button10 />
    </div>
  );
}

function Frame812203() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Container />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[4px] shrink-0 w-[800px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Create new group</p>
      <Input4 />
      <Input5 />
      <Frame812203 />
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

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-0 w-[111px]" data-name="Container" />;
}

function Tag() {
  return (
    <div className="bg-[#ecf0f3] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Tag">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-center text-nowrap whitespace-pre">2 rules</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 relative w-[143px]" data-name="Container">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">ESG score</p>
      <Tag />
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Container">
      <Container4 />
      <p className="[grid-area:1_/_1] font-['GT_America:Regular',_sans-serif] leading-[24px] ml-0 mt-[24px] not-italic relative text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Assess Environmental, Social and Governance</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function DriveFileMove() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="drive_file_move">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="drive_file_move">
          <path d={svgPaths.p184536e8} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <DriveFileMove />
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

function AddRiskFactor3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Edit />
    </div>
  );
}

function Delete1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="delete">
          <path d={svgPaths.p2e54fe00} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddRiskFactor4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Add risk factor">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Delete1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Container">
      <AddRiskFactor2 />
      <AddRiskFactor3 />
      <AddRiskFactor4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <DragIndicator />
          <ExpandMore />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function ConfigureRiskFactors1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Configure risk factors">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[32px] py-[20px] relative w-full">
          <ConfigureRiskFactors />
          <Container2 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-[845px]" data-name="Main content">
      <Header />
      <StatusIndicator />
      <ConfigureRiskFactors1 />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main content">
      <div aria-hidden="true" className="absolute border border-[#ecf0f3] border-solid inset-0 pointer-events-none" />
      <SideNav />
      <SideNavigation />
      <MainContent />
      <SideNavigation />
    </div>
  );
}

export default function RiskModel() {
  return (
    <div className="bg-white relative size-full" data-name="Risk model">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <GlobalAppHeaderEvo />
        <MainContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}