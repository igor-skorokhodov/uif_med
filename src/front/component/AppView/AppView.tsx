import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import BreadcrumbsComponent from '../../../core/front-core/inter-field/Breadcrumbs/Breadcrumbs'
import { withRouter } from '../../../core/front-core/inter-field/Breadcrumbs/withRouter'
import { ILocationProps } from '../../assets/interface_library'
import { humanSystems } from '../../assets/shared/projectData'
import { HeaderIcons } from '../HeaderIcons/HeaderIcons'
import { Menu } from '../Menu/Menu'
import styles from "./AppView.module.css";

class AppComponent extends Component<ILocationProps> {
    render() {
        const { pathname } = this.props.location
        return (
            <>
                <div className={styles.header}>

                    <div className={styles.header__content}>
                        <HeaderIcons />
                    </div>
                    <div className={styles.breadcrumbs}>
                        <BreadcrumbsComponent />
                    </div>
                </div>
                <div className={styles.header__text}>
                            {
                                humanSystems.map((system) => {
                                    return (pathname === system.path ?
                                        <h1>{system.name}</h1> : " ")
                                })
                            }
                            <h2>Наведите на картинку</h2>
                        </div>
                <div className={styles.main}>
                    <Menu />
                    <Outlet />
                </div>
            </>
        )
    }
}

export const AppView = withRouter(AppComponent);