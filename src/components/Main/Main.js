import classes from "./Main.module.css"
import CardGrid from "./CardGrid/CardGrid";
import Form from "./Form/Form";
// import TablePricing from "./PricingTable/TablePricing";
// import TablePricingv2 from "./PricingTable/TablePricingv2";

const Main = () => {

    return (
        <main  className={classes.wrap}>
            <CardGrid />
            {/* <TablePricing />
            <TablePricingv2 /> */}
            <Form />
        </main>
    )
}

export default Main;