import './App.css';
import Card from './components/Card';

function App(){  

    let data =[{
        
        plan: "FREE",
        price:0,
        user: "Single User",
        userEnabler:true,
        storage:"5GB Storage",
        storageEnabler:true,
        publicProjects: "Unliminted Public Projects",
        publicProjectsEnabler:true,
        communityAccess: "Commity Access",
        communityAccessEnabler:true,
        privateProjects: "Unlimited Private Projects",
        privateProjectsEnabler:false,
        phoneSupport: "Dedicated Phone Support",
        phoneSupportEnabler:false,
        subdomain: "Free Subdomain",
        subdomainEnabler:false,
        reports: "Monthly Status Reports",
        reportsEnabler:false
    },
    {  
        plan: "PLUS",
        price:9,
        user: "5 User",
        userEnabler:true,
        storage:"50GB Storage",
        storageEnabler:true,
        publicProjects: "Unliminted Public Projects",
        publicProjectsEnabler:true,
        communityAccess: "Commity Access",
        communityAccessEnabler:true,
        privateProjects: "Unlimited Private Projects",
        privateProjectsEnabler:true,
        phoneSupport: "Dedicated Phone Support",
        phoneSupportEnabler:true,
        subdomain: "Free Subdomain",
        subdomainEnabler:true,
        reports: "Monthly Status Reports",
        reportsEnabler:false
    },
    { 
        plan: "PRO",
        price:49,
        user: "Unilimited User",
        userEnabler:true,
        storage:"150GB Storage",
        storageEnabler:true,
        publicProjects: "Unliminted Public Projects",
        publicProjectsEnabler:true,
        communityAccess: "Commity Access",
        communityAccessEnabler:true,
        privateProjects: "Unlimited Private Projects",
        privateProjectsEnabler:true,
        phoneSupport: "Dedicated Phone Support",
        phoneSupportEnabler:true,
        subdomain: "Unlimited Free Subdomain",
        subdomainEnabler:true,
        reports: "Monthly Status Reports",
        reportsEnabler:true
}]

    

return <>
<section className="pricing py-5">
  <div className="container">
    <div className="row">
        {/* this is one way to say the list */}
     {/* <Card card={data[0]}/>
     <Card card={data[1]}/>
     <Card card={data[2]}/> */}

     {/* this is another way */}
     {
        data.map((e)=>{
            return <Card card={e}/>
        })
     }
    
    </div>
  </div>
</section>
</>
}

export default App;
