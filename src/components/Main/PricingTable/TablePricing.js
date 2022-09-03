
import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import classes from "./TablePricing.module.css";

const TablePricing = () => {
    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <section className={classes.container}>
            <div className={classes.wrap}>
                <PricingTable highlightColor='#1976D2'>
                    <PricingSlot onClick={submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                        <PricingDetail> <b>15</b> projects</PricingDetail>
                        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>5</b> users</PricingDetail>
                        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                    <PricingSlot highlighted onClick={submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                        <PricingDetail> <b>35</b> projects</PricingDetail>
                        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                        <PricingDetail> <b>Time tracking</b></PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        </section>
    )
}

export default TablePricing;