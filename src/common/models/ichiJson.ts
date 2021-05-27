
type Navbar = {
  logo: string,
  navMenu: string[]
}

type Header = {
  name: string;
  text: string;
  button: {
    text: string;
    href: string;
  }
}

type HowItWorksSection = {
  href: string;
  header: Header;
}

type OneTokensSection = {
  header: Header;
  oneTokens: Header[]
}

type PartnersSection = {
  header: Header;
  partners: Header[]
}

type JoinTheCommunitySection = {
  header: Header;
}

export type IchiJson = {
  ichiJson: {
    navbar: Navbar;
    howItWorksSection: HowItWorksSection;
    oneTokensSection: OneTokensSection;
    partnersSection: PartnersSection;
    joinTheCommunitySection: JoinTheCommunitySection;
  };
};