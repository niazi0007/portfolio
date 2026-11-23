import Nav from "@/components/Nav";
import { contact, profile } from "@/data/site";
import { products, currency } from "@/data/products";

export const metadata = { title: `Store | ${profile.name}` };

export default function Store() {
  return (
    <>
      <Nav />
      <div className="store-hero">
        <div className="kicker">STORE</div>
        <h2 style={{ fontSize: "clamp(28px,3.4vw,46px)", letterSpacing: 5, margin: "10px 0 14px" }}>PRODUCTS</h2>
        <p className="lead" style={{ marginTop: 0 }}>Order directly on WhatsApp. Cash on delivery available.</p>
      </div>
      <div className="products">
        {products.map((p) => {
          const msg = encodeURIComponent(`Hello, I want to order: ${p.name} (${currency} ${p.price})`);
          return (
            <div className={`product ${p.inStock ? "" : "soldout"}`} key={p.id}>
              <div className="img" style={p.image ? { backgroundImage: `url(/products/${p.image})` } : {}}>
                {!p.image && "NO IMAGE"}
              </div>
              <div className="body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="price">{currency} {p.price.toLocaleString()}</div>
                <a className="btn primary order" href={`https://wa.me/${contact.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer">
                  {p.inStock ? "ORDER ON WHATSAPP" : "OUT OF STOCK"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <footer className="foot"><span>{profile.location}</span><span>© {new Date().getFullYear()} {profile.short}</span></footer>
    </>
  );
}
