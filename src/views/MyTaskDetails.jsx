import { useState } from "react";
import styles from "../styles/MyTaskDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faCheckDouble,
  faComments,
  faInfoCircle,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

export default function MyTaskDetails() {
  let [showMyTask, setShowMyTask] = useState(true);
  let [showMyComs, setShowMyComs] = useState(false);

  function showComs() {
    setShowMyTask(false);
    setShowMyComs(true);
  }

  return (
    <>
      <div className={styles.main}>
        {showMyTask && (
          <div>
            <h1 className={styles.titre}>
              {" "}
              <FontAwesomeIcon icon={faAnglesRight} className="w-8 h-5" />
              Mes tâches :
            </h1>
            <div className={styles.taskLoading}>
              <h1 className="font-bold mt-5">Liste de vos tâches en cours :</h1>
              <div className={styles.headList}>
                <li className="w-[60%]">Titre</li>
                <li className="w-[20%]">Date limite</li>
                <li className="w-[6%]"></li>
                <li className="w-[6%]"></li>
                <li className="w-[6%] mr-2"></li>
              </div>
              <div className={styles.content}>
                <div className={styles.body}>
                  <li className="w-[60%]">Taches 1</li>
                  <li className="w-[20%]">2024-02-23</li>
                  <li className=" text-center w-[6%]">
                    <Tippy content="Mettre comme fait">
                      <FontAwesomeIcon
                        icon={faCheckDouble}
                        className=" cursor-pointer text-green-500 w-8 h-5"
                      />
                    </Tippy>
                  </li>
                  <li className="text-center w-[6%]">
                    <Tippy content="A propos">
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className=" cursor-pointer text-blue-500 w-8 h-5"
                      />
                    </Tippy>
                  </li>
                  <li className="text-center w-[6%]">
                    <Tippy content="Ajouter un commentaire ">
                      <FontAwesomeIcon
                        onClick={() => showComs()}
                        icon={faComments}
                        className=" cursor-pointer w-8 h-5"
                      />
                    </Tippy>
                  </li>
                </div>
              </div>
            </div>
            <div className={styles.taskDone}>
              <h1 className="font-bold mt-5">
                Liste de vos tâches achevées (01) :
              </h1>
              <div className={styles.headList}>
                <li className="w-[40%]">Titre</li>
                <li className="w-[20%]">Date limite</li>
                <li className="w-[20%]">Date d'achèvement</li>
                <li className="w-[10%]"></li>
                <li className="w-[10%] mr-2"></li>
              </div>
              <div className={styles.content}>
                <div className={styles.body}>
                  <li className="w-[40%]">Taches 1</li>
                  <li className="w-[20%]">2024-02-23</li>
                  <li className="w-[20%]">2024-02-23</li>

                  <li className="text-center w-[10%]">
                    <Tippy content="A propos">
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className=" cursor-pointer text-blue-500 w-8 h-5"
                      />
                    </Tippy>
                  </li>
                  <li className="text-center w-[10%]">
                    <Tippy content="Ajouter un commentaire ">
                      <FontAwesomeIcon
                        icon={faComments}
                        className=" cursor-pointer w-8 h-5"
                      />
                    </Tippy>
                  </li>
                </div>
              </div>
            </div>
          </div>
        )}
        {showMyComs && <div>
            <h1 className={styles.titre}><FontAwesomeIcon icon={faAngleLeft} className="w-8 h-5" />Vos commentaires</h1>
            </div>}
      </div>
    </>
  );
}
