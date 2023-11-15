import { Helmet } from "@/lib/react-helmet-async";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = ({
  title = "Welcome To ProShop",
  description = "We sell the best products for cheap",
  keywords = "electronics, buy electronics, cheap electroincs",
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

export default Meta;
