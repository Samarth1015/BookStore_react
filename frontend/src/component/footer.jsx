import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import "./footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footeri() {
  return (
    <Footer container style={{ height: "7rem" }}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterLinkGroup>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              About
            </FooterLink>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              Privacy Policy
            </FooterLink>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              Licensing
            </FooterLink>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              Contact
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Flowbite™" year={2024} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <InstagramIcon style={{ marginLeft: "1.1rem" }}></InstagramIcon>
          <LinkedInIcon style={{ marginLeft: "1.1rem" }}></LinkedInIcon>
          <GitHubIcon style={{ marginLeft: "1.1rem" }}></GitHubIcon>
          <WhatsAppIcon style={{ marginLeft: "1.1rem" }}></WhatsAppIcon>
        </div>
      </div>
    </Footer>
  );
}
