import { Product } from "@/components/product";

export const metadata = {
  title: "Products",
  description: "Prodcuts by Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Products</h1>

      <Product
        title="FTR Events Dashboard"
        // link={{
        //   url: "https://app.ftr.events",
        // }}
        details={`FTR Events is a simracing league on iRacing. The league was 
        running most of it's operations out of a Discord server, supplemented by
        Discord bots and spreadsheets.
        
        The app is developed using Next.js, hosted on AWS EC2. It has authentication powered
        by Auth.js and DynamoDB. The back-end is MySQL. It provides user registration, driver profile
        management, team creation and management, event registration, series registration, and admin
        functionalities so the FTR Events team can focus on the racing instead of series and event
        administration. 
        `}
      />
    </section>
  );
}
