import React, { Component } from 'react'
import Highlight from 'react-highlight'
import Copy from '../copy'
import 'highlight.js/styles/github.css'
import ClipboardJS from 'clipboard'
import buttons from './buttons'

class Buttons extends Component {
  componentDidMount() {
    new ClipboardJS('#itemCopy')
  }
  render() {
    const ButtonHtml = `
      <button type="button" class="button btn-primary">
        <span>
          <span>Botão Primário</span>
        </span>
      </button>
    `;

    return (
      <div className="content-component">
        <h2>Buttons</h2>

        <h3>Botões são utilizados em várias páginas, abaixo você verá um modo de uso e seus padrões.</h3>

        <h2 className="sub-title">Botões Padrões</h2>
        <p>Para utlizar esse botão padrão será necessário inserir a classe CSS <xmp>button</xmp> dentro da esturura PHTML do template Magento.</p>

        <p>Existem 3 tipos de botões, "Primário", "Segundario" e "Ghost".</p>

        <div className="row-content">
          <button type="button" title="Adicionar à" class="button btn-primary" data-clipboard-action="copy" data-clipboard-target="button">
            <span>
              <span>BOTÃO PRIMARIO</span>
            </span>
          </button>

          <button type="button" title="Adicionar à" class="button btn-segundary">
            <span>
              <span>BOTÃO SEGUNDÁRIO</span>
            </span>
          </button>

          <button type="button" title="Adicionar à" class="button btn-ghost">
            <span>
              <span>BOTÃO GHOST</span>
            </span>
          </button>
        </div>

        <div className="line-divider"></div>

        <h2 className="sub-title">Botão Primário</h2>
        <p>Para utilizar o botão primário será necessário chamar a classe CSS <xmp>.btn-primary</xmp> dentro do mockup HTML do magento, veja o exemplo abaixo:</p>

        <br />

        {/* <button id='itemCopy' data-clipboard-action="copy" data-clipboard-target={ButtonHtml}>Copy</button>

        <Copy copyHtml={ButtonHtml} /> */}

        <Highlight id="copyHtml" language="html">{ButtonHtml}</Highlight> <br />

        <div className="line-divider"></div>

        <p>Por padrão o <xmp>.btn-primary</xmp> vem estilizado com as cores padrões do site, há seis tipos de variações de cor nos botões, que são:</p>

        <div className="row-content space-ard">
          {buttons.map(item => (
            <Highlight id="copyCss" language="css">
              .{item.class}
            </Highlight>
          ))}
        </div>

        {buttons.map(item => (
          <div className="row-content column">
            <h2 className="sub-title">{item.name}</h2>
            <p>Utilize a classe <xmp>.{item.class}</xmp> logo após a declaração do <xmp>.btn-primary</xmp> para usar a cor da categoria {item.name}.</p><br />

            <Highlight id="copyHtml" language="html">{

              <code>
                &lt;button type="button" class="button btn-primary {item.class}"&gt;
                  &lt;span&gt;
                    &lt;span Botão Primário &lt;span&gt;
                  &lt;span&gt;
                &lt;button&gt;
              </code>

            }</Highlight> <br />

            <div className="row-content space-ard">
              <button type="button" className={`button btn-primary ${item.class}`}>
                <span>
                  <span>BOTÃO PRIMARIO</span>
                </span>
              </button>

              <button type="button" className={`button btn-ghost ${item.class}`}>
                <span>
                  <span>BOTÃO GHOST</span>
                </span>
              </button>
            </div>

            <div className="line-divider"></div>

          </div>
        ))}

      </div>
    );
  }
}

export default Buttons
