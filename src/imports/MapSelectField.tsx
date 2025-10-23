import svgPaths from "./svg-9wbimklu66";

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

function Check() {
  return (
    <div className="relative size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.pd9ec680} fill="var(--fill-0, #113B61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconHolder() {
  return (
    <div className="bg-[#d5e4f8] content-stretch flex gap-[8px] items-center justify-center relative rounded-[999px] size-[32px]" data-name="Icon Holder">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Check />
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
          <div className="bg-[#2062d5] h-[200px] w-px" data-name="Line" />
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
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "26" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="flex flex-col font-['GT_America:Medium',_sans-serif] h-[26px] justify-center leading-[0] not-italic relative text-[#113b61] text-[14px] text-center w-[30px]">
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
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-center text-nowrap whitespace-pre">Map</p>
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

function Component2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="2">
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
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function Group152() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['GT_America:Medium',_sans-serif] justify-center ml-0 mt-[12px] not-italic relative text-[#3e4260] text-[16px] text-nowrap translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">{`Map columns in your file to the corresponding fields in Maxsight `}</p>
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

function ContentBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[757px]" data-name="Content block">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none" />
      <HeadingBlock />
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
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">FILE COLUMN HEADER FILE</p>
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

function MenuControl8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon9 />
    </div>
  );
}

function ResizeHandle17() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim8 />
      <MenuControl8 />
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

function GridCell20() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell21() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Country of incorporation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell22() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Date of incorp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell23() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Company number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell24() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Orbis ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell25() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Credit score</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Clipped-Grid">
      <GridCell20 />
      <GridCell21 />
      <GridCell22 />
      <GridCell23 />
      <GridCell24 />
      <GridCell25 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[363px]" data-name="Column">
      <ColumnHeader8 />
      <ClippedGrid1 />
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
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">PREVIEW COLUMN DATA</p>
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

function Icon10() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList9 />
    </div>
  );
}

function MenuControl9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon10 />
    </div>
  );
}

function ResizeHandle19() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim9 />
      <MenuControl9 />
    </div>
  );
}

function ColumnHeader9() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-[284px]" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle18 />
      <LeftBias9 />
      <ResizeHandle19 />
    </div>
  );
}

function GridCell26() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">Target Unlimited Inc.</p>
            <p>Hanover Trustees and Partners LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell26 />
    </div>
  );
}

function GridCell27() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">France</p>
            <p>Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell27 />
    </div>
  );
}

function GridCell28() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">12-12-1992</p>
            <p>12-12-1992</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell28 />
    </div>
  );
}

function GridCell29() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">2452653563</p>
            <p>3463464346</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell29 />
    </div>
  );
}

function GridCell30() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">346346346346</p>
            <p>3463464646</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell30 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[284px]" data-name="Column">
      <ColumnHeader9 />
      <ClippedGrid2 />
      <ClippedGrid3 />
      <ClippedGrid4 />
      <ClippedGrid5 />
      <ClippedGrid6 />
      <ClippedGrid4 />
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
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">MAXSIGHT FIELD</p>
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

function Icon11() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList10 />
    </div>
  );
}

function MenuControl10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon11 />
    </div>
  );
}

function ResizeHandle21() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim10 />
      <MenuControl10 />
    </div>
  );
}

function ColumnHeader10() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle20 />
      <LeftBias10 />
      <ResizeHandle21 />
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
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Name</p>
      <ExpandMore />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button4 />
    </div>
  );
}

function GridCell32() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame56 />
        </div>
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
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Country of incorporation</p>
      <ExpandMore1 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button5 />
    </div>
  );
}

function GridCell33() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore2() {
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

function Button6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Date of incorporation</p>
      <ExpandMore2 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button6 />
    </div>
  );
}

function GridCell34() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore3() {
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

function Button7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Customer number</p>
      <ExpandMore3 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button7 />
    </div>
  );
}

function GridCell35() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame59 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore4() {
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

function Button8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Orbis ID</p>
      <ExpandMore4 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button8 />
    </div>
  );
}

function GridCell36() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore5() {
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

function Button9() {
  return (
    <div className="bg-[#f2f7fd] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Choose or create field</p>
      <ExpandMore5 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button9 />
    </div>
  );
}

function GridCell37() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function ClippedGrid8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Clipped-Grid">
      <GridCell32 />
      <GridCell33 />
      <GridCell34 />
      <GridCell35 />
      <GridCell36 />
      <GridCell37 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[247px]" data-name="Column">
      <ColumnHeader10 />
      <ClippedGrid8 />
    </div>
  );
}

function ResizeHandle22() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias11() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap uppercase">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">MAPPING STATUS</p>
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

function Icon12() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList11 />
    </div>
  );
}

function MenuControl11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon12 />
    </div>
  );
}

function ResizeHandle23() {
  return (
    <div className="content-stretch flex h-[14.09px] items-center justify-end relative shrink-0 w-[135.375px]" data-name="Resize Handle">
      <GridPartsShim11 />
      <MenuControl11 />
    </div>
  );
}

function ColumnHeader11() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle22 />
      <LeftBias11 />
      <ResizeHandle23 />
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

function GridCell38() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Slot />
        </div>
      </div>
    </div>
  );
}

function GridCell43() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 w-full" />
      </div>
    </div>
  );
}

function GridCell44() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 w-full" />
      </div>
    </div>
  );
}

function ClippedGrid9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clipped-Grid">
      {[...Array(5).keys()].map((_, i) => (
        <GridCell38 key={i} />
      ))}
      <GridCell43 />
      <GridCell44 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="Column">
      <ColumnHeader11 />
      <ClippedGrid9 />
    </div>
  );
}

function DataGrid() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Grid">
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
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

function ResizeHandle40() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias20() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">FILE COLUMN HEADER</p>
      </div>
    </div>
  );
}

function GridPartsShim20() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList20() {
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

function Icon26() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList20 />
    </div>
  );
}

function MenuControl20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon26 />
    </div>
  );
}

function ResizeHandle41() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim20 />
      <MenuControl20 />
    </div>
  );
}

function ColumnHeader20() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle40 />
      <LeftBias20 />
      <ResizeHandle41 />
    </div>
  );
}

function GridCell65() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell66() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Country of incorporation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell67() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Date of incorp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell68() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Company number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell69() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Orbis ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCell70() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Credit score</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Clipped-Grid">
      <GridCell65 />
      <GridCell66 />
      <GridCell67 />
      <GridCell68 />
      <GridCell69 />
      <GridCell70 />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col h-[438px] items-start relative shrink-0 w-[329px]" data-name="Column">
      <ColumnHeader20 />
      <ClippedGrid11 />
    </div>
  );
}

function ResizeHandle42() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias21() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">PREVIEW COLUMN DATA</p>
      </div>
    </div>
  );
}

function GridPartsShim21() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList21() {
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
      <FilterList21 />
    </div>
  );
}

function MenuControl21() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon27 />
    </div>
  );
}

function ResizeHandle43() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim21 />
      <MenuControl21 />
    </div>
  );
}

function ColumnHeader21() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-[284px]" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle42 />
      <LeftBias21 />
      <ResizeHandle43 />
    </div>
  );
}

function GridCell71() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">Target Unlimited Inc.</p>
            <p>Hanover Trustees and Partners LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell71 />
    </div>
  );
}

function GridCell72() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">France</p>
            <p>Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell72 />
    </div>
  );
}

function GridCell73() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">12-12-1992</p>
            <p>12-12-1992</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell73 />
    </div>
  );
}

function GridCell74() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">2452653563</p>
            <p>3463464346</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell74 />
    </div>
  );
}

function GridCell75() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">346346346346</p>
            <p>3463464646</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell75 />
    </div>
  );
}

function GridCell76() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <div className="-webkit-box basis-0 css-tlng0p flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-full justify-center leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px]">
            <p className="mb-0">545</p>
            <p>525</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClippedGrid17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[284px]" data-name="Clipped-Grid">
      <GridCell76 />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[284px]" data-name="Column">
      <ColumnHeader21 />
      <ClippedGrid12 />
      <ClippedGrid13 />
      <ClippedGrid14 />
      <ClippedGrid15 />
      <ClippedGrid16 />
      <ClippedGrid17 />
    </div>
  );
}

function ResizeHandle44() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias22() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">MAXSIGHT FIELD</p>
      </div>
    </div>
  );
}

function GridPartsShim22() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList22() {
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
      <FilterList22 />
    </div>
  );
}

function MenuControl22() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon28 />
    </div>
  );
}

function ResizeHandle45() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim22 />
      <MenuControl22 />
    </div>
  );
}

function ColumnHeader22() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle44 />
      <LeftBias22 />
      <ResizeHandle45 />
    </div>
  );
}

function ExpandMore6() {
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

function Button11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Name</p>
      <ExpandMore6 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button11 />
    </div>
  );
}

function GridCell77() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore7() {
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

function Button12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Country of incorporation</p>
      <ExpandMore7 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button12 />
    </div>
  );
}

function GridCell78() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore8() {
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

function Button13() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Date of incorporation</p>
      <ExpandMore8 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button13 />
    </div>
  );
}

function GridCell79() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore9() {
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

function Button14() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Customer number</p>
      <ExpandMore9 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button14 />
    </div>
  );
}

function GridCell80() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore10() {
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

function Button15() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Orbis ID</p>
      <ExpandMore10 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button15 />
    </div>
  );
}

function GridCell81() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function ExpandMore11() {
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

function Button16() {
  return (
    <div className="bg-[#f9fafa] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#84899f] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Choose or create field</p>
      <ExpandMore11 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button16 />
    </div>
  );
}

function GridCell82() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function ClippedGrid18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Clipped-Grid">
      <GridCell77 />
      <GridCell78 />
      <GridCell79 />
      <GridCell80 />
      <GridCell81 />
      <GridCell82 />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[247px]" data-name="Column">
      <ColumnHeader22 />
      <ClippedGrid18 />
    </div>
  );
}

function ResizeHandle46() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias23() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap uppercase">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">MAPPING STATUS</p>
      </div>
    </div>
  );
}

function GridPartsShim23() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList23() {
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
      <FilterList23 />
    </div>
  );
}

function MenuControl23() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon29 />
    </div>
  );
}

function ResizeHandle47() {
  return (
    <div className="content-stretch flex h-[14.09px] items-center justify-end relative shrink-0 w-[135.375px]" data-name="Resize Handle">
      <GridPartsShim23 />
      <MenuControl23 />
    </div>
  );
}

function ColumnHeader23() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle46 />
      <LeftBias23 />
      <ResizeHandle47 />
    </div>
  );
}

function Slot5() {
  return (
    <div className="bg-[#ccecea] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Slot">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#004641] text-[14px] text-center text-nowrap whitespace-pre">Complete</p>
    </div>
  );
}

function GridCell83() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Slot5 />
        </div>
      </div>
    </div>
  );
}

function WarningAmber() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="warning_amber">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="warning_amber">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #620837)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <WarningAmber />
    </div>
  );
}

function Slot7() {
  return (
    <div className="bg-[#ffe2c6] box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative rounded-[14px] shrink-0" data-name="Slot">
      <Icon32 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b321f] text-[14px] text-center text-nowrap underline whitespace-pre">2 Errors</p>
    </div>
  );
}

function GridCell85() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Slot7 />
        </div>
      </div>
    </div>
  );
}

function GridCell88() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 w-full" />
      </div>
    </div>
  );
}

function GridCell89() {
  return (
    <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-0 w-full" />
      </div>
    </div>
  );
}

function ClippedGrid19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clipped-Grid">
      <GridCell83 />
      <GridCell83 />
      <GridCell85 />
      <GridCell83 />
      <GridCell83 />
      <GridCell88 />
      <GridCell89 />
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="Column">
      <ColumnHeader23 />
      <ClippedGrid19 />
    </div>
  );
}

function ResizeHandle48() {
  return <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle" />;
}

function LeftBias24() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">EXISTING VALUES</p>
      </div>
    </div>
  );
}

function GridPartsShim24() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
      <div className="absolute inset-0" />
    </div>
  );
}

function FilterList24() {
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

function Icon35() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Icon">
      <FilterList24 />
    </div>
  );
}

function MenuControl24() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
      <Icon35 />
    </div>
  );
}

function ResizeHandle49() {
  return (
    <div className="basis-0 content-stretch flex grow h-[14.09px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Resize Handle">
      <GridPartsShim24 />
      <MenuControl24 />
    </div>
  );
}

function ColumnHeader24() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Column Header">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ResizeHandle48 />
      <LeftBias24 />
      <ResizeHandle49 />
    </div>
  );
}

function ExpandMore12() {
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

function Button17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[9px] py-[5px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Overwrite</p>
      <ExpandMore12 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button17 />
    </div>
  );
}

function GridCell90() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Grid Cell">
      <div aria-hidden="true" className="absolute border-[#ecf0f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[65px] items-center px-[16px] py-0 relative w-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function ClippedGrid20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Clipped-Grid">
      {[...Array(6).keys()].map((_, i) => (
        <GridCell90 key={i} />
      ))}
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[207px]" data-name="Column">
      <ColumnHeader24 />
      <ClippedGrid20 />
    </div>
  );
}

function DataGrid1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Grid">
      <Column6 />
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
    </div>
  );
}

function Grid1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1257px]" data-name="Grid">
      <DataGrid1 />
    </div>
  );
}

function DataMinusScrollbar1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Data-Minus-Scrollbar">
      <Grid1 />
    </div>
  );
}

function ColumnsAndScrollbar1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Columns and Scrollbar">
      <DataMinusScrollbar1 />
    </div>
  );
}

function ColumnsAndFilter1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Columns and Filter">
      <ColumnsAndScrollbar1 />
    </div>
  );
}

function Grid2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Grid">
      <ColumnsAndFilter1 />
    </div>
  );
}

function AgGridColumnBasedLayout() {
  return (
    <div className="bg-white h-[438px] min-w-[6px] relative rounded-[2px] shrink-0 w-[1257px]" data-name="AG Grid (Column based layout)">
      <div className="content-stretch flex flex-col h-[438px] items-start min-w-inherit overflow-clip relative rounded-[inherit] w-[1257px]">
        <Grid2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ecf0f3] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Grid3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Grid">
      <ColumnsAndFilter />
      <AgGridColumnBasedLayout />
    </div>
  );
}

function AgGridColumnBasedLayout1() {
  return (
    <div className="bg-white h-[438px] min-w-[6px] relative rounded-[2px] shrink-0 w-[1242px]" data-name="AG Grid (Column based layout)">
      <div className="content-stretch flex flex-col h-[438px] items-start min-w-inherit overflow-clip relative rounded-[inherit] w-[1242px]">
        <Grid3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ecf0f3] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="h-[901px] relative shrink-0 w-full" data-name="Content container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[901px] items-start px-[36px] py-[24px] relative w-full">
          <ContentBlock />
          <AgGridColumnBasedLayout1 />
        </div>
      </div>
    </div>
  );
}

function Frame812143() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col h-[940px] items-start ml-0 mt-0 relative w-[1440px]">
      <Header />
      <ContentContainer />
    </div>
  );
}

function TextIcon2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text & Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Bliss_Pro:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#646882] text-[15px] text-nowrap whitespace-pre">Search for a field</p>
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
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0bec5] border-solid inset-0 pointer-events-none rounded-[3px]" />
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

function ItemSearch() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item Search">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pb-[4px] pt-[12px] px-[12px] relative w-full">
          <Input2 />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['GT_America:Regular',_sans-serif] grow h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">Name</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] overflow-clip relative shrink-0 w-full" data-name="Menu Item">
      <Item />
    </div>
  );
}

function Frame675679915() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]">
      <MenuItem />
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['GT_America:Regular',_sans-serif] grow h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">Company number</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] overflow-clip relative shrink-0 w-[348px]" data-name="Menu Item">
      <Item1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['GT_America:Regular',_sans-serif] grow h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">Orbis ID</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] overflow-clip relative shrink-0 w-[348px]" data-name="Menu Item">
      <Item2 />
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['GT_America:Regular',_sans-serif] grow h-[24px] leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap">Date of incorporation</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] overflow-clip relative shrink-0 w-[348px]" data-name="Menu Item">
      <Item3 />
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#2062d5] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0 w-[160px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2062d5] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Create custom field</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center p-[10px] relative w-full">
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Frame675679916() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d5d7dd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame675679915 />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <Buttons1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-full z-[1]" data-name="Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <ItemSearch />
        <Frame675679916 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#aeb2bc] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col isolate items-center justify-end min-w-[200px] ml-[593px] mt-[630px] relative rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)] w-[259px]" data-name="Dropdown Menu">
      <Content1 />
    </div>
  );
}

function Group153() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame812143 />
      <DropdownMenu />
    </div>
  );
}

function Button24() {
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
      <Button24 />
    </div>
  );
}

function Button25() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <p className="font-['GT_America:Medium',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button25 />
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

function Button26() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646882] text-[14px] text-nowrap whitespace-pre">Next</p>
      <ArrowForward />
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[1322px] top-0">
      <Button26 />
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
      <p className="font-['GT_America:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e4260] text-[14px] text-nowrap whitespace-pre">Don’t import data in unmapped column</p>
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
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end left-[1040px] top-[15px]" data-name="Checkbox">
      <Checkbox />
      <Value />
    </div>
  );
}

function Frame675679920() {
  return (
    <div className="h-[32px] relative shrink-0 w-[1392px]">
      <Frame675679933 />
      <Frame74 />
      <div className="absolute flex flex-col font-['GT_America:Medium',_sans-serif] justify-center leading-[0] left-[1312px] not-italic text-[#3e4260] text-[14px] text-nowrap text-right top-[5px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">You have 1 unmapped column</p>
      </div>
      <Checkbox1 />
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

export default function MapSelectField() {
  return (
    <div className="bg-white relative size-full" data-name="Map - select field">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <GlobalAppHeaderEvo />
        <Group153 />
        <BannerBar />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7dd] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}