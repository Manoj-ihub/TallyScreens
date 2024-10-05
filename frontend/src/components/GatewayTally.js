import React from "react";
import "./GatewayTally.css";

const GatewayTally = () => {
  return (
    <div>
      <div className="Gateway-homepage-heading">
        <h3>Gateway BizBooks</h3>
      </div>
      <div className="Gateway-homepage">
        <div className="Gateway-homepage-column-1">
          <div className="Gateway-homepage-column-1-date">
            <div className="Gateway-homepage-column-1-FY">
              <h5>CURRENT PERIOD</h5>
              <p className="Gateway-homepage-column-1-date-para">
                Financial Year
              </p>
            </div>
            <div className="Gateway-homepage-column-1-today-date">
              <h5>CURRENT DATE</h5>
              <p className="Gateway-homepage-column-1-date-para">Today date</p>
            </div>
          </div>

          <div className="Gateway-homepage-column-1-entries-heading">
            <h5>NAME OF COMPANY</h5>
            <h5>DATE OF LAST ENTRY</h5>
          </div>

          <div className="Gateway-homepage-column-1-entries">
            <div>
              <p>Company Name</p>
            </div>
            <div>
              <p>Voucher Entered</p>
            </div>
          </div>
        </div>

        <div className="Gateway-homepage-column-2">
          <div className="Gateway-homepage-column-2-container">
            <div className="Gateway-homepage-column-2-container-heading">
              Gateway of BizBooks
            </div>
            <div className="Gateway-homepage-column-2-container-content">
              <h5>MASTERS</h5>
              {/* <br /> */}
              <p>Create</p>
              <p>Alter</p>
              <p>Chart of Accounts</p>
              {/* <br /> */}
              <h5>TRANSACTIONS</h5>
              {/* <br /> */}
              <p>Vouchers</p>
              <p>Day Books</p>
              {/* <br /> */}
              <h5>UTILITIES</h5>
              {/* <br /> */}
              <p>Banking</p>
              {/* <br /> */}
              <h5>REPORTS</h5>
              {/* <br /> */}
              <p>Balance Sheet</p>
              <p>Profit & Loss A/c</p>
              <p>Stock Summary</p>
              <p>Ratio Analysis</p>
              {/* <br /> */}
              <p>Display More Reports</p>
              <p>Dashboard</p>
              {/* <br /> */}
              <p>Quit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatewayTally;
