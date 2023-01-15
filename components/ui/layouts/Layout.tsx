import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../navbar";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}
export const Layout: FC<LayoutProps> = ({
  children,
  title = "CV | Allan Castro",
  description = "Portfolio de Allan Castro - Desarrollador Web",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.svg" />
      </Head>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};
