import css from '../section/Section.module.css'

export const Section = ({ title, children }) => {
    return (
      <section className={css.fedbackConteiner}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </section>
    );
};
