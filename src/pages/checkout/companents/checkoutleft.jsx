const CheckoutLeft = () => {
  return (
    <div className="checkout__left">
      <h2 className="checkout__left__title">Billing Address</h2>
      <div className="checkout__inputs__name">
        <div className="checkout__inputs__firstName">
          <p className="checkout__inputs__firstName__text">First Name</p>
          <input type="text" className="checkout__inputs__firstName__input" />
        </div>
        <div className="checkout__inputs__LastName">
          <p className="checkout__inputs__LastName__text">Last Name</p>
          <input type="text" className="checkout__inputs__LastName__input" />
        </div>
      </div>
      <div className="checkout__inputs__country">
        <div className="checkout__inputs__Country">
          <p className="checkout__inputs__Country__text">Country / Region</p>
          <input
            type="text"
            className="checkout__inputs__Country__input"
            placeholder="Select a country / region"
          />
        </div>
        <div className="checkout__inputs__Town">
          <p className="checkout__inputs__Town__text">Town / City</p>
          <input type="text" className="checkout__inputs__Town__input" />
        </div>
      </div>
      <div className="checkout__inputs__streets">
        <div className="checkout__inputs__street">
          <p className="checkout__inputs__street__text">Street Address</p>
          <input
            type="text"
            className="checkout__inputs__street__input"
            placeholder="House number and street name"
          />
        </div>
        <div className="checkout__inputs__street">
          <input
            type="text"
            className="checkout__inputs__street__input"
            placeholder="Appartment, suite, unit, etc. (optional)"
          />
        </div>
      </div>
      <div className="checkout__inputs__states">
        <div className="checkout__inputs__state">
          <p className="checkout__inputs__state__text">State</p>
          <input
            type="text"
            className="checkout__inputs__state__input"
            placeholder="Select a state"
          />
        </div>
        <div className="checkout__inputs__zip">
          <p className="checkout__inputs__zip__text">Zip</p>
          <input type="text" className="checkout__inputs__zip__input" />
        </div>
      </div>
      <div className="checkout__inputs__Emails">
        <div className="checkout__inputs__Email">
          <p className="checkout__inputs__Email__text">Email address</p>
          <input type="text" className="checkout__inputs__Email__input" />
        </div>
        <div className="checkout__inputs__number">
        <p className="checkout__inputs__number__text">Phone Number</p>
          <input type="number" className="checkout__inputs__number__input" />
        </div>
      </div>
      <div className="left__end__radio">
        <input type="radio" />
        <p>Ship to a different address?</p>
      </div>
    </div>
  );
};

export default CheckoutLeft;
