import { Fog, GridContainer } from "~/components/madeup/grid-background";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GridContainer>
      <Fog />
      {children}
    </GridContainer>
  );
}