import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Aside from '../../Components/Aside/Aside.js';
import { Link } from 'react-router-dom';
import './not-found.css';

function NotFound() {
        return (
          <>
            <Navbar/>
              <main>
                <Aside/>  
                <section className='not-found' >
                  <h2 className='sorry'> Désolé la page demandée n'exsite pas !</h2>
                    <h3 className='warning'> Erreur 404</h3>
                    <Link className="return"
                          to='/'>
                      <p> Nous vous invitons à retourner sur la page principale </p>
                    </Link>
                </section>    
              </main>
          </>
        )
      }
export default  NotFound