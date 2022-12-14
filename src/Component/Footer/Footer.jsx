import styles from "./Footer.module.css"

export default function Footer(){

    return(
        <div className={styles.FooterBorder}>
            <div className={styles.Foo_logoToggl} >
                <h1 className={styles.Footoggle}>toggl 
                  <span className={styles.Footrack}>track</span> 
                </h1>
            </div>
            <div className={styles.Foo_DetailsVariety}>
                <div className={styles.FooColunm}>
                    <h2>TOGGL GLOBAL</h2>
                    <p>Blog</p>
                    <p>Our Mission</p>
                    <p>Working at Toggl <button className={styles.Foo_Count}>3</button></p>
                    <p>Legal Terms</p>
                </div>

                <div className={styles.FooColunm}>
                    <h2>PRODUCT</h2>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Integrations</p>
                    <p>Case Studies</p>
                    <p>API</p>
                </div>

                <div className={styles.FooColunm}>
                    <h2>USE CASES</h2>
                    <p>Billing and Invoicing</p>
                    <p>Employee Time Tracking</p>
                    <p>Project Budgeting</p>
                    <p>Reporting</p>
                    <p>Payroll</p>
                </div>

                <div className={styles.FooColunm}>
                    <h2>DOWNLOAD</h2>
                    <p>Mobile Apps</p>
                    <p>Desktop Apps</p>
                    <p>Browser Extensions</p>
                </div>

                <div className={styles.FooColunm}>
                    <h2>HELP</h2>
                    <p>Support & Knowledge</p>
                    <p>Base</p>
                    <p>Request A Demo</p>
                    <p>Contact US</p>
                </div>

                <div className={styles.FooColunm}>
                    <h2>RESOURCES</h2>
                    <p>Time Management Hub</p>
                    <p>Work From Home Hub</p>
                    <p>Business Resources</p>
                    <p>Productivity Templates</p>
                    <p>Timesheet Templates</p>
                    <p>Media Kit</p>
                </div>
            </div>
           
           <div>
            {/* <img src="C:\Users\Admin\Desktop\toggle_Project\toggltrack\src\Component\Footer\twitter.gif" alt="Twitter" />
            <img src="" alt="" />
            <svg fill="white"
             xmlns="http://www.w3.org/2000/svg"  
             viewBox="0 0 50 50" width="50px" 
             height="50px">
                <path d="M 30.140625 2 C 26.870375 2 24.045399 2.9969388 22.0625 4.9667969 C 20.079601
                 6.936655 19 9.823825 19 13.367188 L 19 18 L 13 18 A 1.0001 1.0001 0 0 0 12 19 L 12 27
                  A 1.0001 1.0001 0 0 0 13 28 L 19 28 L 19 47 A 1.0001 1.0001 0 0 0 20 48 L 28 48 A 1.0001
                   1.0001 0 0 0 29 47 L 29 28 L 36 28 A 1.0001 1.0001 0 0 0 36.992188 27.125 L 37.992188 
                   19.125 A 1.0001 1.0001 0 0 0 37 18 L 29 18 L 29 14 C 29 12.883334 29.883334 12 31 12 L 37
                    12 A 1.0001 1.0001 0 0 0 38 11 L 38 3.3457031 A 1.0001 1.0001 0 0 0 37.130859 2.3554688
                    C 36.247185 2.2382213 33.057174 2 30.140625 2 z M 30.140625 4 C 32.578477 4 34.935105
                     4.195047 36 4.2949219 L 36 10 L 31 10 C 28.802666 10 27 11.802666 27 14 L 27 19 A 1.0001
                      1.0001 0 0 0 28 20 L 35.867188 20 L 35.117188 26 L 28 26 A 1.0001 1.0001 0 0 0 27 27 L
                       27 46 L 21 46 L 21 27 A 1.0001 1.0001 0 0 0 20 26 L 14 26 L 14 20 L 20 20 A 1.0001 
                       1.0001 0 0 0 21 19 L 21 13.367188 C 21 10.22255 21.920305 7.9269075 23.472656 6.3847656
                         C 25.025007 4.8426237 27.269875 4 30.140625 4 z"/></svg>
                    
            <svg fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.400391 9 C 18.047481 9 11.841886 9.4912502 8.2988281 10.220703 L 8.2773438 10.224609 L 8.2578125 10.230469 C 5.9731342 10.801638 4.2004289 12.381577 3.8183594 14.513672 C 3.8183594 14.513672 3.8183594 14.515625 3.8183594 14.515625 C 3.4020807 16.701687 3 20.343065 3 25 C 3 29.941882 3.5009174 33.393569 4.0195312 35.585938 C 4.400347 37.711968 6.1564529 39.411369 8.5039062 39.880859 L 8.5058594 39.880859 L 8.5097656 39.880859 C 12.226538 40.603565 18.246237 41.099609 24.5 41.099609 C 30.753763 41.099609 36.871619 40.604227 40.591797 39.880859 L 40.617188 39.876953 L 40.642578 39.871094 C 42.931719 39.298809 44.706617 37.712635 45.083984 35.574219 L 45.085938 35.5625 L 45.087891 35.552734 C 45.489356 32.943212 45.998163 29.385531 46.099609 24.921875 L 46.099609 24.912109 L 46.099609 24.900391 C 46.099609 21.228358 45.691692 17.670027 45.083984 14.326172 C 44.700008 12.150303 42.84158 10.608804 40.654297 10.033203 L 40.601562 10.019531 L 40.544922 10.009766 C 37.075013 9.4996379 31.150142 9 24.400391 9 z M 24.400391 11 C 31.010805 11 36.833357 11.495522 40.173828 11.982422 C 41.767875 12.412896 42.900791 13.45865 43.115234 14.673828 L 43.115234 14.675781 L 43.115234 14.679688 C 43.706081 17.929346 44.098439 21.364365 44.099609 24.884766 C 44.000709 29.209183 43.511156 32.643432 43.113281 35.230469 C 42.889839 36.485701 41.870185 37.492109 40.171875 37.921875 C 36.687446 38.595753 30.629638 39.099609 24.5 39.099609 C 18.354632 39.099609 12.376019 38.595118 8.8925781 37.917969 L 8.890625 37.917969 C 7.2465615 37.586682 6.2078664 36.493015 5.984375 35.226562 L 5.9804688 35.197266 L 5.9726562 35.167969 C 5.4941959 33.158437 5 29.831973 5 25 C 5 20.457971 5.3995806 16.900737 5.7832031 14.886719 L 5.7832031 14.880859 L 5.7851562 14.873047 C 6.0071542 13.615105 7.0284334 12.605619 8.7304688 12.175781 C 11.993074 11.5074 18.166915 11 24.400391 11 z M 19 16.966797 L 19 18.699219 L 19 33.033203 L 32.898438 25 L 19 16.966797 z M 21 20.433594 L 28.902344 25 L 21 29.566406 L 21 20.433594 z"/></svg>
           
            <svg fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"/></svg>
            */}
           </div>
          
        </div>
    )
}