import React from 'react'
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';



const Buttons = () => (
  <div className='content-component'>

    <div className="title">
      <h2>Grid</h2>
      <h3>Grid são utilizados em várias páginas, abaixo você verá um modo de uso e seus padrões.</h3>
    </div>

    <div className="block-component">

      <p>O Grid System e composto por 12 colunas, onde para acionar uma e necessário usar o prefixo <xmp className="css">rd-col-*</xmp>, em <xmp>*</xmp> você usará o número de colunas que deseja utilzar de 1 a 12.</p>

    </div>

    <div className="block-component">
      <div class='row'>
        <div class='rd-col-1 box text center'>1</div>
        <div class='rd-col-1 box text center'>2</div>
        <div class='rd-col-1 box text center'>3</div>
        <div class='rd-col-1 box text center'>4</div>
        <div class='rd-col-1 box text center'>5</div>
        <div class='rd-col-1 box text center'>6</div>
        <div class='rd-col-1 box text center'>7</div>
        <div class='rd-col-1 box text center'>8</div>
        <div class='rd-col-1 box text center'>9</div>
        <div class='rd-col-1 box text center'>10</div>
        <div class='rd-col-1 box text center'>11</div>
        <div class='rd-col-1 box text center'>12</div>
      </div>
    </div>

    <div className="block-component">

      <p>Você pode chamar outras variações de colunas com base na sua necessidade e assim reproduzir o elementos como o esperado.</p>

    </div>

    <div className="block-component">
      <div class='row'>
        <div class='rd-col-6 box text center'>6</div>
        <div class='rd-col-3 box text center'>3</div>
        <div class='rd-col-3 box text center'>3</div>
      </div>
      <br/>
      
      <Highlight id="copyHtml" language="html">

      <code>
        <pre>
          &lt;div class='row'&gt;
            &lt;div class='rd-col-6'>6&lt;div&gt;
            &lt;div class='rd-col-3'>3&lt;div&gt;
            &lt;div class='rd-col-3'>3&lt;div&gt;
          &lt;div&gt;
        </pre>

      </code>

      </Highlight>

    </div>

    <div className="block-component">
      <p>No exemplo acima foi utilizado um conjunto de 3 elementos, um com 6 colunas, acionando a classe <xmp>rd-col-6</xmp> e mais dois da mesma classe <xmp>rd-col-3</xmp></p>
    </div>

    <div className="block-component">
      <p>E de extrema improtância o uso da classe <xmp>row</xmp> antes do uso das colunas. Ela garante que as colunas irão ficar alinhas dentro do grid.</p>
    </div>



  </div>
)

export default Buttons
