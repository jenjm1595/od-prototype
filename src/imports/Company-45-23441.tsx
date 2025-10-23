import svgPaths from "./svg-n7d4p6ckqy";

function MoodysLogo1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96.548px] z-[2]" data-name="Moody\'s Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 16">
        <g clipPath="url(#clip0_45_5822)" id="Moody\'s Logo">
          <path d={svgPaths.p72f1a80} fill="var(--fill-0, white)" id="Vector" />
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
        <g id="language">
          <path d={svgPaths.pf131d80} fill="var(--fill-0, white)" id="Vector" />
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

function Primary() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Primary">
      <p className="font-['GT_America_VF:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3e4260] text-[18px] text-nowrap whitespace-pre">Import file</p>
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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Lhs />
    </div>
  );
}

function IconHolder() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[999px] size-[32px]" data-name="Icon Holder">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "26" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="flex flex-col font-['GT_America:Regular',_sans-serif] h-[26px] justify-center leading-[0] not-italic relative text-[#113b61] text-[14px] text-center w-[30px]">
            <p className="leading-[24px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame675679923() {
  return (
    <div className="h-[24px] relative shrink-0 w-[46px]">
      <p className="absolute font-['GT_America:Regular',_sans-serif] leading-[24px] left-[23px] not-italic text-[#3e4260] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Upload</p>
    </div>
  );
}

function Frame675679921() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1", "--transform-inner-height": "200" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ecf0f3] h-[200px] w-px" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Frame675679922() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[299px]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconHolder />
        </div>
      </div>
      <Frame675679923 />
      <Frame675679921 />
    </div>
  );
}

function IconHolder1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[999px] size-[32px]" data-name="Icon Holder">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "26" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[26px] justify-center leading-[0] not-italic relative text-[#84899f] text-[14px] text-center w-[30px]">
            <p className="leading-[24px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame675679927() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#646882] text-[14px] text-center text-nowrap whitespace-pre">Map</p>
    </div>
  );
}

function Frame675679928() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1", "--transform-inner-height": "200" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ecf0f3] h-[200px] w-px" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Frame675679929() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconHolder1 />
        </div>
      </div>
      <Frame675679927 />
      <Frame675679928 />
    </div>
  );
}

function IconHolder2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[999px] size-[32px]" data-name="Icon Holder">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "26" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[26px] justify-center leading-[0] not-italic relative text-[#84899f] text-[14px] text-center w-[30px]">
            <p className="leading-[24px]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame675679930() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#646882] text-[14px] text-center text-nowrap whitespace-pre">Match</p>
    </div>
  );
}

function Frame675679931() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1", "--transform-inner-height": "200" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ecf0f3] h-[200px] w-px" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Frame675679924() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconHolder2 />
        </div>
      </div>
      <Frame675679930 />
      <Frame675679931 />
    </div>
  );
}

function IconHolder3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[999px] size-[32px]" data-name="Icon Holder">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "26" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[26px] justify-center leading-[0] not-italic relative text-[#84899f] text-[14px] text-center w-[30px]">
            <p className="leading-[24px]">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame675679932() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#646882] text-[14px] text-center text-nowrap whitespace-pre">Review</p>
    </div>
  );
}

function Frame675679934() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1", "--transform-inner-height": "200" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ecf0f3] h-[200px] w-px" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

function Frame675679925() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconHolder3 />
        </div>
      </div>
      <Frame675679932 />
      <Frame675679934 />
    </div>
  );
}

function IconHolder4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[999px] size-[32px]" data-name="Icon Holder">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "26" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[26px] justify-center leading-[0] not-italic relative text-[#84899f] text-[14px] text-center w-[30px]">
            <p className="leading-[24px]">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame675679935() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#646882] text-[14px] text-center text-nowrap whitespace-pre">Import</p>
    </div>
  );
}

function Frame675679926() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconHolder4 />
        </div>
      </div>
      <Frame675679935 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="1">
      <Frame675679922 />
      <Frame675679929 />
      <Frame675679924 />
      <Frame675679925 />
      <Frame675679926 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[36px] py-[24px] relative w-full">
          <Content />
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Group152() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['GT_America:Medium',_sans-serif] justify-center ml-0 mt-[12px] not-italic relative text-[#3e4260] text-[16px] text-nowrap translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">Data type</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <div className="flex flex-row items-center self-stretch">
        <Group152 />
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Heading />
    </div>
  );
}

function HeadingBlock() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Heading block">
      <Wrapper />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3e4260] text-[0px] w-[min-content]">
        <p className="leading-[24px] text-[14px]">Select the type of data records you wish to create or update</p>
      </div>
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

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Company</p>
      <ExpandMore />
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]" data-name="Content block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <HeadingBlock />
      <TextBlock />
      <Button4 />
    </div>
  );
}

function Group154() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['GT_America:Medium',_sans-serif] justify-center ml-0 mt-[12px] not-italic relative text-[#3e4260] text-[16px] text-nowrap translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">Import type</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <div className="flex flex-row items-center self-stretch">
        <Group154 />
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Heading2 />
    </div>
  );
}

function HeadingBlock2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Heading block">
      <Wrapper2 />
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3e4260] text-[0px] w-[min-content]">
        <p className="leading-[24px] text-[14px]">Select how to import company records</p>
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

function Button5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Create new company records</p>
      <ExpandMore1 />
    </div>
  );
}

function ContentBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]" data-name="Content block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <HeadingBlock2 />
      <TextBlock1 />
      <Button5 />
    </div>
  );
}

function Group156() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['GT_America:Medium',_sans-serif] justify-center ml-0 mt-[12px] not-italic relative text-[#3e4260] text-[16px] text-nowrap translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">Unique identifier</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <div className="flex flex-row items-center self-stretch">
        <Group156 />
      </div>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Heading4 />
    </div>
  );
}

function HeadingBlock4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Heading block">
      <Wrapper4 />
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[728px]" data-name="Text block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-col font-['GT_America:Regular',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3e4260] text-[0px] w-[min-content]">
        <p className="leading-[24px] text-[14px]">Select at least one unique identifier is required to match company records. Additional identifiers can be selected and reordered to waterfall to additional identifiers if needed.</p>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox">
          <path d={svgPaths.p3a06f030} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Address</p>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value">
      <Label6 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <Checkbox />
      <Value />
    </div>
  );
}

function DragIndicator() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReorderInputs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Reorder inputs">
      <Checkbox1 />
      <DragIndicator />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox">
          <path d={svgPaths.p3a06f030} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Orbis ID</p>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value">
      <Label7 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <Checkbox2 />
      <Value1 />
    </div>
  );
}

function DragIndicator1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReorderInputs1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Reorder inputs">
      <Checkbox3 />
      <DragIndicator1 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox">
          <path d={svgPaths.p3a06f030} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">BvD ID</p>
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value">
      <Label8 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <Checkbox4 />
      <Value2 />
    </div>
  );
}

function DragIndicator2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReorderInputs2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Reorder inputs">
      <Checkbox5 />
      <DragIndicator2 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox">
          <path d={svgPaths.p3a06f030} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">VAT</p>
    </div>
  );
}

function Value3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value">
      <Label9 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <Checkbox6 />
      <Value3 />
    </div>
  );
}

function DragIndicator3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReorderInputs3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Reorder inputs">
      <Checkbox7 />
      <DragIndicator3 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox">
          <path d={svgPaths.p3a06f030} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Customer number</p>
    </div>
  );
}

function Value4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value">
      <Label10 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <Checkbox8 />
      <Value4 />
    </div>
  );
}

function DragIndicator4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReorderInputs4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Reorder inputs">
      <Checkbox9 />
      <DragIndicator4 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkbox">
          <path d={svgPaths.p3a06f030} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">EIN</p>
    </div>
  );
}

function Value5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value">
      <Label11 />
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <Checkbox10 />
      <Value5 />
    </div>
  );
}

function DragIndicator5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="drag_indicator">
          <path d={svgPaths.p1b8d4580} fill="var(--fill-0, #84899F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReorderInputs5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Reorder inputs">
      <Checkbox11 />
      <DragIndicator5 />
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Checkboxes">
      <ReorderInputs />
      <ReorderInputs1 />
      <ReorderInputs2 />
      <ReorderInputs3 />
      <ReorderInputs4 />
      <ReorderInputs5 />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Columns">
      <Checkboxes />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative rounded-[3px] shrink-0 w-[251px] z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Columns />
    </div>
  );
}

function TableActionColumnSelect() {
  return (
    <div className="content-stretch flex flex-col isolate items-start justify-center relative rounded-[3px] shrink-0 w-[480px]" data-name="Table/Action/Column Select">
      <Content1 />
    </div>
  );
}

function ContentBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]" data-name="Content block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <HeadingBlock4 />
      <TextBlock2 />
      <TableActionColumnSelect />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="h-[901px] relative shrink-0 w-full" data-name="Content container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[901px] items-start px-[36px] py-[24px] relative w-full">
          <ContentBlock />
          <ContentBlock1 />
          <ContentBlock2 />
        </div>
      </div>
    </div>
  );
}

function Frame812143() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Header />
      <ContentContainer />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Back</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button7 />
    </div>
  );
}

function Frame675679933() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[166px]">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_forward">
          <path d={svgPaths.p6903c80} fill="var(--fill-0, #646882)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646882] text-[14px] text-nowrap whitespace-pre">Next</p>
      <ArrowForward />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[1322px] top-0">
      <Button8 />
    </div>
  );
}

function Frame675679920() {
  return (
    <div className="h-[32px] relative shrink-0 w-[1392px]">
      <Frame675679933 />
      <Frame56 />
    </div>
  );
}

function BannerBar() {
  return (
    <div className="bg-[#f4f5f6] box-border content-stretch flex h-[56px] items-center justify-between px-[16px] py-[12px] relative shrink-0 w-[1440px]" data-name="banner bar">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)]" />
      <Frame675679920 />
    </div>
  );
}

export default function Company() {
  return (
    <div className="bg-white relative size-full" data-name="Company">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <GlobalAppHeaderEvo />
        <Frame812143 />
        <BannerBar />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}