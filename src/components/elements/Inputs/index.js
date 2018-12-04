import React from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/styles/github.css'
import inputs from './inputs'

const Inputs = () => (
  <div className="content-component">

    <div className="title">
      <h2>Inputs</h2>
      <h3>Inputs são utilizados em várias páginas, abaixo você verá um modo de uso e seus padrões.</h3>
    </div>


    <div className="block-component">

      <h2 className="sub-title">Inputs Padrões</h2>
      <p>Para utlizar esse botão padrão será necessário inserir a classe CSS <xmp>button</xmp> dentro da esturura HTML do template Magento.
      </p>

    </div>



    <div className="block-component">

      <div className="row">

        <div className="rd-col-4">
          <div className="input-item">
            <label htmlFor="">Label</label>
            <input id="inputE" className="input" type="text" placeholder="Input de Texto"/>
          </div>
        </div>

        <div className="rd-col-4">
          <div className="input-item">
            <label htmlFor="">Label</label>
            <input focus id="inputE" className="input item-focus" type="text" placeholder="Texto em Focus"/>
          </div>
        </div>

        <div className="rd-col-4">
          <div className="input-item">
            <label htmlFor="">Label</label>
            <input disabled id="inputE" className="input" type="text" placeholder="Texto Bloqueado"/>
          </div>
        </div>

      </div>

    </div>

    <div className="block-component">

      <div className="row">

        <div className="rd-col-6">
          <div className="input-item">
            <label htmlFor="">Label</label>
            <input id="inputE" className="input error" type="text" placeholder="Input com texto de erro"/>
          </div>
        </div>

        <div className="rd-col-6">
          <div className="input-item">
            <label htmlFor="">Label</label>
            <input id="inputE" className="input success" type="text" placeholder="Input com texto com sucesso"/>
          </div>
        </div>

      </div>

  </div>

  <div className="block-component">
    <div className="row">
      <div className="rd-col-12">
        <h2 className="sub-title">Input de texto</h2>
        <p>Para utilziar a estilização Input será necessário utilizar a classe <xmp>Input</xmp> na chamada do HTML.</p>
        <br/>
      </div>
      <div className="rd-col-12 align-center">
        <div className="rd-col-6">
          <Highlight id="copyHtml" language="html">{
            <code>
              &lt;input className="input" type="text"/&gt;
            </code>
          }</Highlight>
        </div>
        <div className="rd-col-6">
          <div className="input-item">
              <input id="inputE" className="input" type="text" placeholder="Input de Texto"/>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div className="line-divider"></div>

  {/* INPUT COM ERRO   */}
  <div className="block-component">
    <div className="row">
      <div className="rd-col-12">
        <h2 className="sub-title">Input com erro</h2>
        <p>O Input de erro e somente ativando quando algum campo está com chamada de atenção, para utilizar ele, basta acionar a classe <xmp>error</xmp> junto com a classe<xmp>Input</xmp> na chamada do HTML.</p>
        <br/>
      </div>
      <div className="rd-col-12 align-center">
        <div className="rd-col-8">
          <Highlight id="copyHtml" language="html">{
            <code>
              &lt;input className="input error" type="text"/&gt;
            </code>
          }</Highlight>
        </div>
        <div className="rd-col-4">
          <div className="input-item">
              <input id="inputE" className="input error" type="text" placeholder="Input com erro"/>
            </div>
        </div>
      </div>
    </div>
  </div>

  {/* INPUT COM SUCESSO   */}
  <div className="block-component">
    <div className="row">
      <div className="rd-col-12">
        <h2 className="sub-title">Input com sucesso</h2>
        <p>O Input de sucesso e somente ativando quando algum campo está com chamada de atenção, para utilizar ele, basta acionar a classe <xmp>success</xmp> junto com a classe<xmp>Input</xmp> na chamada do HTML.</p>
        <br/>
      </div>
      <div className="rd-col-12 align-center">
        <div className="rd-col-8">
          <Highlight id="copyHtml" language="html">{
            <code>
              &lt;input className="input success" type="text"/&gt;
            </code>
          }</Highlight>
        </div>
        <div className="rd-col-4">
          <div className="input-item">
              <input id="inputE" className="input success" type="text" placeholder="Input com sucesso"/>
            </div>
        </div>
      </div>
    </div>
  </div>

  {/* INPUT BLOQUEADO   */}
  <div className="block-component">
    <div className="row">
      <div className="rd-col-12">
        <h2 className="sub-title">Texto bloqueado</h2>
        <p>O Input bloqueado e ativando quando o atribuito do HTML <xmp>disabled</xmp></p>
        <br/>
      </div>
      <div className="rd-col-12 align-center">
        <div className="rd-col-8">
          <Highlight id="copyHtml" language="html">{
            <code>
              &lt;input disabled className="input" type="text"/&gt;
            </code>
          }</Highlight>
        </div>
        <div className="rd-col-4">
          <div className="input-item">
              <input disabled id="inputE" className="input" type="text" placeholder="Input bloqueado"/>
            </div>
        </div>
      </div>
    </div>
  </div>



  </div>
)

export default Inputs
