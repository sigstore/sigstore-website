import { getJsonContent } from "@/lib/content";

interface Product {
  productName: string;
  productOverview: string;
  productCTA?: string;
  productCTALink?: string;
}

interface SoftwareListData {
  product: Product[];
}

function ExternalLinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3H21V9" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14L21 3" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SoftwareBehind() {
  const data = getJsonContent<SoftwareListData>("software", "software_list");
  const software = data.product;

  return (
    <section className="py-64 md:py-128 md:px-16 bg-white" data-header-text="text-gray-dark">
      <div className="text-gray-dark container text-left">
        <h3 className="text-36 pb-44 text-gray-dark">
          What&apos;s behind the scenes?
        </h3>
        <div className="flex flex-row flex-wrap justify-left items-start md:-ml-30 md:-mr-30">
          {software.map((product, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 md:pl-30 md:pr-128 mb-44"
            >
              <h4 className="mb-24 text-24 leading-32 text-gray-dark">
                {product.productName}
              </h4>
              <p className="text-gray-dark">{product.productOverview}</p>
              {product.productCTALink && (
                <a
                  className="pt-24 flex items-center h text-12 md:text-16 inline--button-grey"
                  href={product.productCTALink}
                >
                  {product.productCTA}
                  <span className="ml-6">
                    <ExternalLinkIcon />
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
