
const getHome = async (req, res) => {
    return res.status(200)
      .send(`
      <!DOCTYPE html>
        <html>
        <body style="background: #D3CCE3;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        ">
          <h1><b>TP Integrador</b><img src="https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif" width="150"  ></h1><br>
          <img src="https://media.giphy.com/media/xT0xeKFuD2f82C1VPG/giphy.gif"  ><br>
          <audio controls autoplay>
            <source src="vamos.mpeg" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>

          <h2>Usuario</h2>
          <ul>
            <li>Registro[POST]: https://nodeapirest2021.herokuapp.com/auth/register</li>
            <li>Login [POST] : https://nodeapirest2021.herokuapp.com/auth/login</li>
            <li>Actualizar[PUT]: https://nodeapirest2021.herokuapp.com/api/v1/users/1</li>
            <li>Listar[GET](incluyen sus lista de tareas) : https://nodeapirest2021.herokuapp.com/api/v1/users</li>
            <li>Eliminar[DELETE]:https://nodeapirest2021.herokuapp.com/api/v1/users/3</li>
          </ul>

          <h2>Tareas</h2>
          <ul>
            <li>Crear [POST] : https://nodeapirest2021.herokuapp.com/api/v1/tasks</li>
            <li>Modificar[PUT]: https://nodeapirest2021.herokuapp.com/api/v1/tasks/2</li>
            <li>Listar [GET] : https://nodeapirest2021.herokuapp.com/api/v1/tasks</li>
            <li>Eliminar[DELETE]:https://nodeapirest2021.herokuapp.com/api/v1/tasks/3</li>
          </ul>


        </body>
        </html>
      `);
  };

  module.exports = {
    getHome
  };
  