import styles from "./dealprdt.module.scss";
export const Dealprdt = () => {
  return (
    <div className={styles.dealprdt}>
      <img
        src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__"
        alt=""
      />

      <div>
        <div className={styles.prdtdiscount}>
          <p>20% Off</p>
          <p>Limited time</p>
        </div>
        <p className={styles.dealprdtboldp}>
          <b>Webbuilder 1</b>
        </p>
        <p className={styles.dealprdtp}>
          Computer Modern clasic with wix support
        </p>
        <div className={styles.dealprdtprice}>
          <p className={styles.boldprice}>$39.96</p>
          <p className={styles.smallprice}>$49.96</p>
          <p className={styles.pricediscount}>(20% Off)</p>
        </div>
        <button>View Deal</button>
      </div>
    </div>
  );
};
