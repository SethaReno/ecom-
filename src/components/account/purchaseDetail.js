import React, { Component } from 'react';
import { connect } from 'react-redux';




function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'>{title}</div>
            <div className='purchase-detail-label__value'>{value}</div>
        </div>
    )
}

                // _id: 0,
                // total: 13.40,
                // orderNumber: 'Y0008428383',
                // orderDate: new Date(),
                // creaditCard: '-000',
                // user: {
                //     name: 'Tara Gass',
                //     shippingAdress: '1234 East State Street'
                // }


class PurchaseDetail extends Component {
  render() {
    const { className, orderNumber, orderDate, user, total, creaditCard } = this.props;
    const { name, shippingAddress } = user;
    const nameAddress = `${name} 
    \n
    ${shippingAddress}`
    return (
        <div className={`${className} purchase-detail`}>
            <PurchaseDetailLabel
                className='purchase-detail__order-number'
                title='Order Number'
                value={orderNumber}/>
            <PurchaseDetailLabel
                className='purchase-detail__order-date'
                title='Order Date'
                value={orderDate} />
            <PurchaseDetailLabel
                className='purchase-detail__shipping-address'
                title='Shipping Address'
                value={nameAddress} />
                 <PurchaseDetailLabel
                className='purchase-detail__total'
                title='Total'
                value={total} />
                 <PurchaseDetailLabel
                className='purchase-detail__credit-card'
                title='Credit Card'
                value={creaditCard} />
                    <a className='purchase-detail__track-shipment'>Track Shipment</a> 
                    <a className='purchase-detail__print-receipt'>Print Recipt</a> 

              </div>
    
    );
  }
}

function mapStateToProps(state) {
    const  { purchaseDetail } = state.user;
    return {
            ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;

