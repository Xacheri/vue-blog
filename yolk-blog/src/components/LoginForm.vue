<template>
    <form action="http://localhost:3001/api/login" method="post">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="test" class="form-control" id="username" name="username">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <button type="submit" class="btn btn-primary">Log In</button>
    </form>
</template>