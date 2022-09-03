import classes from "./TablePricingv2.module.css"

const TablePricingv2 = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.package}>
                <div className={classes.name}>Limited</div>
                <div className={classes.price}>€2</div>
                <div className={classes.trial}>Available for a month</div>
                <hr className={classes.hr} />
                <ul className={classes.ul}>
                    <li>
                        <strong>8</strong>
                        team members
                    </li>
                    <li>
                        <strong>6</strong>
                        team playlists
                    </li>
                    <li>
                        <strong>Unlimited</strong>
                        public playlists
                    </li>
                </ul>
            </div>
            <div className={`${classes.package} ${classes.brillian}`} >
                <div className={classes.name}>Brilliant</div>
                <div className={classes.price}>€5</div>
                <div className={classes.trial}>Free 30 day trial</div>
                <hr className={classes.hr} />
                <ul className={classes.ul}>
                    <li>
                        <strong>Unlimited</strong>
                        team members
                    </li>
                    <li>
                        <strong>Unlimited</strong>
                        team playlists
                    </li>
                    <li>
                        <strong>Unlimited</strong>
                        public playlists
                    </li>
                    <li>
                        Team analytics
                    </li>
                    <li>
                        Send files
                    </li>
                </ul>
            </div>
            <div className={classes.package} >
                <div className={classes.name}>Basic</div>
                <div className={classes.price}>€0</div>
                <div className={classes.trial}>Totally free</div>
                <hr className={classes.hr} />
                <ul className={classes.ul}>
                    <li>
                        <strong>5</strong>
                        team members
                    </li>
                    <li>
                        <strong>3</strong>
                        team playlists
                    </li>
                    <li>
                        <strong>Unlimited</strong>
                        public playlists
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default TablePricingv2;