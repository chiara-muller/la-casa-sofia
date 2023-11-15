import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {json} from '@shopify/remix-oxygen';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */

export async function loader({context}) {
  const {collections} = await context.storefront.query(COLLECTIONS_QUERY);
  const {product} = await context.storefront.query(PRODUCT_QUERY);

  return json({
    collections,
    product,
  });
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {collections, product} = useLoaderData();
  return (
    <div className="home">
      <div className="title-container">
        <h1 className="title">
          LA <br /> CASA <br /> SOFIA
        </h1>
        <p style={{color: '#D9F49E'}}>CERAMIC STUDIO</p>
      </div>
      <div className="collection-container">
        <h2 className="subtitle">Collections</h2>
        <div className="collections">
          {collections?.nodes?.map((collection) => {
            return (
              <Link
                to={`/collections/${collection.handle}`}
                key={collection.id}
              >
                <div className="collection">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      key={collection.id}
                      width="300px"
                      height="300px"
                      crop="center"
                      style={{borderRadius: '50%'}}
                    />
                  )}
                </div>
                <br />
                <h2>{collection.title}</h2>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="inspiring-container">
        <h2 className="subtitle">We are creative, you are creative</h2>
        <div className="inspiring-quotes">
          <div className="inspiring-quote">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              width="100px"
              height="100px"
            >
              <g fill="#64f380">
                <g transform="scale(5.12,5.12)">
                  <path d="M34.55469,3.98438c-0.77969,-0.02622 -1.5958,0.10972 -2.41406,0.375c-1.63652,0.53057 -3.35142,1.56451 -5.11133,2.99609c-0.68971,0.56104 -1.38567,1.20236 -2.08398,1.88281c-0.68291,-0.66318 -1.36458,-1.28924 -2.03906,-1.83789c-1.75849,-1.43043 -3.46875,-2.46282 -5.10156,-2.99219c-1.63281,-0.52936 -3.25746,-0.54577 -4.5918,0.22461c-1.33433,0.77038 -2.13227,2.18454 -2.49024,3.86328c-0.35796,1.67874 -0.32048,3.6779 0.03906,5.91602c0.12489,0.7774 0.30495,1.59297 0.50781,2.42383c-0.76244,0.23107 -1.50285,0.47402 -2.18945,0.74219c-2.0721,0.80931 -3.78663,1.77754 -5.03516,2.92969c-1.24853,1.15215 -2.05469,2.55049 -2.05469,4.08594c0,1.53545 0.80616,2.93183 2.05469,4.08398c1.24852,1.15215 2.96306,2.12233 5.03516,2.93164c0.73417,0.28675 1.52904,0.54495 2.34961,0.78906c-0.29516,1.10284 -0.53429,2.17303 -0.69727,3.1875c-0.35984,2.23992 -0.39783,4.23933 -0.03906,5.92187c0.35878,1.68255 1.15712,3.10472 2.49805,3.87891c1.34093,0.77419 2.97286,0.75518 4.60938,0.22461c1.63652,-0.53057 3.34947,-1.56256 5.10938,-2.99414c0.68336,-0.55587 1.3746,-1.18998 2.06641,-1.86328c0.6951,0.67698 1.38977,1.3147 2.07617,1.87305c1.75849,1.43043 3.4707,2.46282 5.10352,2.99219c1.63281,0.52936 3.25551,0.54577 4.58984,-0.22461c1.33433,-0.77038 2.13227,-2.18454 2.49023,-3.86328c0.35796,-1.67874 0.31853,-3.6779 -0.04102,-5.91602c-0.16341,-1.01722 -0.4027,-2.08901 -0.69922,-3.19531c0.84768,-0.25006 1.66765,-0.5152 2.42383,-0.81055c2.0721,-0.80931 3.78663,-1.77949 5.03516,-2.93164c1.24853,-1.15215 2.05469,-2.54854 2.05469,-4.08398c0,-1.53545 -0.80616,-2.93379 -2.05469,-4.08594c-1.24853,-1.15215 -2.96306,-2.12037 -5.03516,-2.92969c-0.69645,-0.27202 -1.44823,-0.51813 -2.22266,-0.75195c0.20451,-0.83595 0.38608,-1.65737 0.51172,-2.43945c0.35983,-2.23991 0.39784,-4.24128 0.03906,-5.92383c-0.35877,-1.68255 -1.15907,-3.10277 -2.5,-3.87695c-0.67047,-0.38709 -1.41367,-0.57535 -2.19336,-0.60156zM34.46289,6.01953c0.48926,0.01338 0.90664,0.12981 1.26367,0.33594c0.71406,0.41226 1.24186,1.21462 1.52344,2.53516c0.28158,1.32053 0.27185,3.1047 -0.06055,5.17383c-0.11381,0.70843 -0.27905,1.45924 -0.4668,2.22852c-2.04495,-0.49214 -4.28569,-0.85754 -6.67383,-1.07227c-1.19973,-1.66224 -2.43287,-3.17433 -3.67578,-4.51758c0.65714,-0.64146 1.31002,-1.2414 1.94727,-1.75977c1.62571,-1.32243 3.16481,-2.22226 4.44922,-2.63867c0.6422,-0.20821 1.2041,-0.29854 1.69336,-0.28516zM15.48633,6.02539c0.49209,-0.01374 1.05516,0.07635 1.69922,0.28516c1.28811,0.41761 2.8299,1.31705 4.45703,2.64063c0.62431,0.50784 1.26287,1.0947 1.90625,1.7207c-1.25187,1.35391 -2.49365,2.88183 -3.70117,4.55859c-2.37965,0.21869 -4.6124,0.58756 -6.64844,1.08203c-0.18653,-0.7656 -0.34958,-1.51341 -0.46289,-2.21875c-0.33269,-2.07092 -0.34099,-3.8573 -0.05859,-5.18164c0.28239,-1.32434 0.8145,-2.13081 1.53516,-2.54687c0.36032,-0.20803 0.78135,-0.32611 1.27344,-0.33984zM24.97656,12.14258c0.8145,0.8864 1.6295,1.85672 2.4375,2.90039c-0.79403,-0.03311 -1.59777,-0.05274 -2.41406,-0.05274c-0.83254,0 -1.65159,0.02026 -2.46094,0.05469c0.80829,-1.04462 1.62269,-2.01518 2.4375,-2.90234zM25,17.00977c1.35989,0 2.68535,0.05588 3.97461,0.15039c0.88712,1.27416 1.75404,2.6259 2.58008,4.05664c0.72582,1.25715 1.38264,2.51237 1.98047,3.75195c-0.60414,1.25603 -1.27197,2.52822 -2.00781,3.80273c-0.64774,1.12191 -1.32415,2.18746 -2.01172,3.21484c-1.45631,0.12172 -2.96532,0.18945 -4.51562,0.18945c-1.58762,0 -3.13054,-0.07175 -4.61914,-0.19922c-0.67612,-1.01261 -1.34112,-2.06398 -1.97852,-3.16797c-0.73416,-1.2716 -1.39877,-2.53951 -2.00195,-3.79297c0.60572,-1.26053 1.27331,-2.53745 2.01172,-3.81641c0.82171,-1.42324 1.6861,-2.76716 2.56836,-4.03516c1.30314,-0.09664 2.64398,-0.1543 4.01953,-0.1543zM31.55078,17.41016c1.64775,0.20566 3.19487,0.49138 4.63477,0.83398c-0.42742,1.40115 -0.95389,2.86467 -1.5918,4.375c-0.41418,-0.79842 -0.84315,-1.59956 -1.30664,-2.40234c-0.56138,-0.97234 -1.14508,-1.90084 -1.73633,-2.80664zM18.34375,17.42578c-0.5791,0.88932 -1.14891,1.7988 -1.69922,2.75195c-0.46944,0.81309 -0.90731,1.625 -1.32617,2.43359c-0.6324,-1.50125 -1.1557,-2.95645 -1.58008,-4.34961c1.42972,-0.34336 2.96848,-0.62791 4.60547,-0.83594zM38.16406,18.77539c0.70888,0.21449 1.3935,0.43832 2.02148,0.68359c1.91015,0.74606 3.4211,1.62951 4.40039,2.5332c0.97929,0.90369 1.4043,1.76551 1.4043,2.60156c0,0.83605 -0.42501,1.69787 -1.4043,2.60156c-0.97929,0.90369 -2.49024,1.78714 -4.40039,2.5332c-0.69785,0.27256 -1.46459,0.51973 -2.26172,0.75391c-0.56863,-1.75878 -1.29442,-3.59365 -2.1582,-5.4668c0.99316,-2.15054 1.79546,-4.24734 2.39844,-6.24023zM11.80273,18.78516c0.59606,1.97294 1.38812,4.04905 2.36719,6.17773c-0.86945,1.88406 -1.59883,3.72936 -2.16992,5.49805c-0.76904,-0.22802 -1.50979,-0.46849 -2.18555,-0.73242c-1.91015,-0.74606 -3.4211,-1.62951 -4.40039,-2.5332c-0.97929,-0.90369 -1.4043,-1.76551 -1.4043,-2.60156c0,-0.83605 0.42501,-1.69787 1.4043,-2.60156c0.97929,-0.90369 2.49024,-1.78714 4.40039,-2.5332c0.61832,-0.2415 1.29146,-0.46215 1.98828,-0.67383zM25,20c-2.74958,0 -5,2.25042 -5,5c0,2.74958 2.25042,5 5,5c2.74958,0 5,-2.25042 5,-5c0,-2.74958 -2.25042,-5 -5,-5zM25,22c1.6687,0 3,1.3313 3,3c0,1.6687 -1.3313,3 -3,3c-1.6687,0 -3,-1.3313 -3,-3c0,-1.6687 1.3313,-3 3,-3zM34.61914,27.36328c0.52446,1.24121 0.98032,2.45577 1.36328,3.62695c-1.20261,0.27886 -2.48313,0.51382 -3.83008,0.69922c0.38773,-0.61867 0.77064,-1.24888 1.14453,-1.89648c0.46868,-0.81178 0.90397,-1.62249 1.32227,-2.42969zM15.3418,27.36523c0.42051,0.8122 0.85847,1.62652 1.33008,2.44336c0.36919,0.63946 0.74618,1.26377 1.12891,1.875c-1.34296,-0.18622 -2.61955,-0.42199 -3.81836,-0.70117c0.38123,-1.16761 0.83732,-2.37963 1.35938,-3.61719zM13.40625,32.92383c1.80982,0.42874 3.77147,0.75808 5.85156,0.97266c1.38884,2.00876 2.83486,3.81281 4.29102,5.39063c-0.65102,0.63475 -1.29626,1.23047 -1.92773,1.74414c-1.62571,1.32243 -3.16677,2.22031 -4.45117,2.63672c-1.28441,0.41641 -2.24298,0.36148 -2.95703,-0.05078c-0.71406,-0.41226 -1.2399,-1.21462 -1.52149,-2.53516c-0.28158,-1.32053 -0.2738,-3.10275 0.05859,-5.17187c0.15079,-0.93866 0.37615,-1.94378 0.65625,-2.98633zM36.56055,32.93164c0.28224,1.04835 0.50854,2.05817 0.66016,3.00195c0.33269,2.07092 0.34099,3.85535 0.05859,5.17969c-0.28239,1.32434 -0.81255,2.13276 -1.5332,2.54883c-0.72065,0.41607 -1.6865,0.4723 -2.97461,0.05469c-1.28811,-0.41761 -2.82991,-1.319 -4.45703,-2.64258c-0.63601,-0.51736 -1.28573,-1.11596 -1.94141,-1.75586c1.46562,-1.58377 2.92242,-3.3976 4.32031,-5.41797c2.08534,-0.21314 4.05243,-0.54052 5.86719,-0.96875zM21.86719,34.10156c1.02676,0.05596 2.06706,0.09375 3.13281,0.09375c1.0305,0 2.03706,-0.03552 3.03125,-0.08789c-1.01629,1.37117 -2.05222,2.61773 -3.08398,3.74023c-1.03114,-1.1249 -2.06512,-2.37369 -3.08008,-3.74609z"></path>
                </g>
              </g>
            </svg>
            <h4> To be just with yourself or a beloved one </h4>
          </div>
          <div className="inspiring-quote">
            <h4>Inspiration is the key to creativity</h4>
          </div>
          <div className="inspiring-quote">
            <h4>Made with skin friendly ingredients</h4>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box-info">
          <h2 style={{fontSize: '35px'}}>
            Everything in one box, to make your own pieces, by yourself.
          </h2>
          <br />
          <ul style={{listStyle: 'inside'}}>
            <li>One box in the most beautiful package, with a manual</li>
            <li>Clay and tools to make your own unique pieces</li>
            <li>8 Pastel acrylic paint and brushes</li>
            <li>Varnish gloss</li>
          </ul>
          <br />
          <br />
          <Link to={`/products/${product.handle}`} key={product.id}>
            <p style={{fontSize: '30px'}}>
              Get your {product.title} for{' '}
              {product.priceRange.maxVariantPrice.amount}
              {product.priceRange.maxVariantPrice.currencyCode}
            </p>
          </Link>
        </div>
        <div className="box-img">
          <Image
            className="img-info"
            alt={`Image of ${product.title}`}
            data={product.featuredImage}
            key={product.id}
          />
        </div>
      </div>
      <div className="contact-container">
        <h2 className="subtitle">Follow</h2>
        <div className="contact-info">
          {/* <button className="contact-button">
            <a
              href="https://www.instagram.com/casa_sofia_ceramic/"
              rel="noreferrer"
              target="_blank"
              className="link-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="32px"
                height="32px"
              >
                <g fill="#64f380">
                  <g transform="scale(8,8)">
                    <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                  </g>
                </g>
              </svg>
              <p>casa_sofia_ceramic</p>
            </a>
          </button> */}
          <button className="insta-button">
            <a
              href="https://www.instagram.com/casa_sofia_ceramic/"
              rel="noreferrer"
              target="_blank"
              className="link-info">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {' '}
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{' '}
              </svg>
              <span>casa_sofia_ceramic</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  query {
    product(id:"gid://shopify/Product/8862909235544") {
     title
     handle
     featuredImage {
      id
      altText
      url
     }
     priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    }
  }
`;
/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
