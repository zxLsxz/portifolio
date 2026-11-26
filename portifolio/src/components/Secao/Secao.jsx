function Secao({ children, id, alternada = false }) {
  return (
     <section id={id} className={alternada ? 'secao secao--alternada' : 'secao'}>
      <div className="container">{children}</div>
    </section>
  )
}
 
export default Secao