import React from 'react'
import colors from './colors'

const Colors = () => (

  <div className='content-component'>

    <h2>Colors</h2>

    <h3>Para utilizar alguma cor, por favor, clique na cor deseda para copiar.</h3>



    <div className='colors-palette'>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Cores Institucionais</h2> <br />

        {colors.institutionalColors.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Universo Saúde</h2> <br />

        {colors.universeHealth.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Universo Infantil</h2> <br />

        {colors.universeChildren.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

    </div>

    <div className='colors-palette'>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Beleza e Saúde</h2> <br />

        {colors.universeBeauty.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Maquiagem e Saúde</h2> <br />

        {colors.universeMakeup.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Cuidados Diários</h2> <br />

        {colors.universeCare.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

    </div>

    <div className='colors-palette'>
      <div className="line-divider"></div>
    </div>

    <div className='colors-palette'>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Cores Cross</h2> <br />

        {colors.crossColors.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

    </div>

    <div className='colors-palette'>
      <div className="line-divider"></div>
    </div>

    <div className='colors-palette'>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Camada 1</h2> <br />

        {colors.layerOne.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

    </div>

    <div className='colors-palette'>
      <div className="line-divider"></div>
    </div>

    <div className='colors-palette'>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Camada 2</h2> <br />

        {colors.layerTwo.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

    </div>

    <div className='colors-palette'>
      <div className="line-divider"></div>
    </div>

    <div className='colors-palette'>

      <div className='row-colors'>
        <h2 className="sub-title margin-large">Camada 3</h2> <br />

        {colors.layerThree.map(item => (
          <div className='color'>
            <h4 className="small-title">{item.name}</h4>
            <div className='box-color-1' style={{ backgroundColor: item.hex }} />

            <div className='color-info'>

              <table>
                <tr>
                  <td>HEX:</td>
                  <td>{item.hex}</td>
                </tr>
                <tr>
                  <td>R:</td>
                  <td>{item.rgb[0]}</td>
                </tr>

                <tr>
                  <td>G: </td>
                  <td>{item.rgb[1]}</td>
                </tr>

                <tr>
                  <td>B: </td>
                  <td>{item.rgb[2]}</td>
                </tr>
              </table>

            </div>
          </div>
        ))}

      </div>

    </div>

  </div>




)

export default Colors
