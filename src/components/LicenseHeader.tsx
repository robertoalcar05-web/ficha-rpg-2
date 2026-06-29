import styles from "./LicenseHeader.module.css";

const TITLE = "NIGHT CITY";
const SUBTITLE = "CITIZEN LICENSE";

export default function LicenseHeader() {
  return (
    <div className={styles.license}>
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.cornerBrackets} aria-hidden="true">
        <span className={styles.cornerTopLeft} />
        <span className={styles.cornerTopRight} />
        <span className={styles.cornerBottomLeft} />
        <span className={styles.cornerBottomRight} />
      </div>

      <div className={styles.metaRow}>
        <span className={styles.metaTag}>NC-PDL-2077</span>
        <span className={styles.metaDivider} aria-hidden="true">//</span>
        <span className={styles.metaStatus}>STATUS: ACTIVE</span>
      </div>

      <div className={styles.glitchWrap}>
        <h1 className={styles.glitchTitle} data-text={TITLE}>
          {TITLE}
        </h1>
      </div>

      <h2 className={styles.subtitle}>{SUBTITLE}</h2>

      <div className={styles.footerRow}>
        <span className={styles.footerLine} aria-hidden="true" />
        <span className={styles.footerLabel}>NCPD AUTHORIZED</span>
        <span className={styles.footerLine} aria-hidden="true" />
      </div>
    </div>
  );
}
