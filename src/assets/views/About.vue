<template>
<div class="container">
    <h2 class="welcome">Welcome!</h2>
    <p class="main">Hey, I'm David, a new graduate in software development and IT services. Over the course
        of my education, I dipped my toes in several languages and frameworks.
        Most recently I used Ruby on Rails, PostgreSQL, Redis and Docker to create a simple API for a friendly benchmark
        contest. I also have experience using Java, JavaScript, Swift, Xamarin, C#/.NET, React, Vue, and others.
        </p>
        <p class="main">
        On the IT services side, I have in-class and lab experience with Windows Server, Active Directory, System
        Center Configuration Manager, Linux <i>(including Bash and Perl)</i>, and Azure.
    </p>
    <p class="main">
        When I'm not trying to improve an area of my skillset, I enjoy playing golf and solving puzzles. 
    </p>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.welcome {
    padding-bottom: 0.5em;
}
.main{
    font-size: large;
    margin-right: 10%;
}
</style>