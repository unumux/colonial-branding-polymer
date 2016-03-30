import gulp from "gulp";

const browserSync = require("browser-sync").create();

function initBS() {
    browserSync.init({
        server: {
            baseDir: ".",
            routes: {
                "/components": "./components",
            }
        },
        startPath: "/components"
    });
}

function watch() {
    return gulp.watch("components/**/*", browserSync.reload);
}

export const serve = gulp.parallel([watch, initBS]);
