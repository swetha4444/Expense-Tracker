export default function Footer() {
    return(
      <footer>
          <div className="container" style={{textAlign:"center"}}>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <h3>Socials</h3>
                <p><a href="index.html">Linkedin</a></p>
                <p><a href="index.html">Instagram</a></p>
                <p><a href="index.html">GitHub</a></p>
                <p><a href="index.html">Twitter</a></p>
              </div>   
              <div className="col-md-4 col-sm-4 newsletter">
                <h3>Created By</h3>
                <p>Swetha Saseendran<br/>CSE-C<br/>183</p>
                <div className="input-group">
                </div>
              </div>      
            </div>
          </div>
      </footer>
)
}