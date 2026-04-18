import { useNavigate } from "react-router-dom";

export default function Project1() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="Project1" className="section project-detail">
        <button className="home-btn project-back-btn" onClick={() => navigate("/projects")}>
          Back to Projects
        </button>

        <div className="project-hero-layout">
          <div>
            <p className="project-kicker">Case Study 01</p>
            <h1>POS System</h1>
            <div className="project-chip-row">
              <span className="project-chip">VB.NET</span>
              <span className="project-chip">MySQL</span>
              <span className="project-chip">Point of Sale</span>
            </div>
            <p className="project-lead">
              A Point of Sale (POS) system is used by businesses to manage and
              complete sales transactions efficiently. It allows users to record
              product sales, calculate totals, apply taxes and discounts, and
              process payment methods such as cash, card, and digital payments.
            </p>
          </div>

          <img src="/POS.png" alt="POS system dashboard" className="project-img project-img-large"/>
        </div>

        <p className="project-paragraph">
          In addition to billing, a POS system also manages inventory by
          automatically updating stock levels after each sale. It stores
          customer and sales data, generates invoices and receipts, and
          provides sales reports for better business analysis. Overall, a POS
          system increases operational speed, reduces errors, and helps
          businesses make informed decisions.
        </p>

        <p className="project-paragraph">
          This Point of Sale (POS) system is developed using VB.NET for the
          application interface and MySQL as the backend database to ensure
          reliable data storage and efficient transaction management.
        </p>
  
  <div className="pos-system-section project-feature-grid">
  <h2 className="section-title">Key System Capabilities</h2>

  <div className="pos-point">
    <h3>1. Transaction Management</h3>
    <p>
      A POS system handles real-time sales transactions with high accuracy. It records each item sold, 
      calculates totals instantly, applies taxes and discounts automatically, and supports multiple 
      payment modes such as cash, debit/credit cards, UPI, and digital wallets. This reduces human errors 
      and speeds up the checkout process.
    </p>
  </div>

  <div className="pos-point">
    <h3>2. Inventory Control & Stock Automation</h3>
    <p>
      POS systems are tightly integrated with inventory management. Every sale automatically updates 
      stock levels, preventing over-selling and stock shortages. It also generates low-stock alerts, 
      tracks fast-moving items, and assists in demand forecasting.
    </p>
  </div>

  <div className="pos-point">
    <h3>3. Customer Data Management</h3>
    <p>
      A POS system stores customer details such as purchase history, preferences, and contact information. 
      This enables personalized discounts, loyalty programs, and targeted promotions, improving customer 
      retention and satisfaction.
    </p>
  </div>

  <div className="pos-point">
    <h3>4. Reporting & Business Analytics</h3>
    <p>
      POS systems generate detailed reports including daily sales, monthly revenue, profit margins, 
      tax summaries, and employee performance. These insights help analyze trends, identify best-selling 
      products, and make data-driven decisions.
    </p>
  </div>

  <div className="pos-point">
    <h3>5. Employee & Role Management</h3>
    <p>
      Modern POS systems support multiple user roles such as cashier, manager, and admin. They track 
      employee activity, login times, and sales performance, ensuring accountability and reducing 
      internal fraud.
    </p>
  </div>

  <div className="pos-point">
    <h3>6. Security & Data Accuracy</h3>
    <p>
      POS systems ensure secure transaction handling through user authentication, encrypted payments, 
      and audit logs. This protects sensitive customer information and reduces financial risks.
    </p>
  </div>

  <div className="pos-point">
    <h3>7. Multi-Store & Cloud Integration</h3>
    <p>
      Advanced POS systems support multiple branches from a single dashboard. Cloud-based integration 
      enables real-time data synchronization, remote monitoring, and access from any device.
    </p>
  </div>

  <div className="pos-point">
    <h3>8. Invoice & Receipt Generation</h3>
    <p>
      The system automatically generates digital or printed invoices and receipts with accurate tax 
      details, improving professionalism and ensuring legal and accounting compliance.
    </p>
  </div>

  <div className="pos-point">
    <h3>9. Time & Cost Efficiency</h3>
    <p>
      By automating billing, inventory updates, and reporting, POS systems reduce manual workload, 
      save time, and lower operational costs, allowing staff to focus more on customer service.
    </p>
  </div>

  <div className="pos-point">
    <h3>10. Business Growth & Scalability</h3>
    <p>
      A POS system grows with the business. New products, payment methods, stores, and features can 
      be added easily, making it suitable for both small businesses and large enterprises.
    </p>
  </div>
</div>

      </section>
    </div>
  );
}

