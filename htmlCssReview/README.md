#Learning html and css

#git commands
//Git keywords
github is a platform for hosting and collaborating on git repositories

git init //initiates a new .git file
git add file-name // adds a file to the staging area
git add . //adds all new entries in the curret directory to staging area
git commit -m"comit message" //saves the yet to be saved files to git log
git commit --amend -m"updated error in commit"
git log //logs all commit history
git show commit-hash // shows commit details
git remote -v //list remote urls
git branch -r //remote branches
git rm --cached //remove file from staging area to unstaged
git push // stores a local copy of your project in the remote server
git branch //list the branches available on local machine
git branch -r // //list the branches available on remote
git branch -a // //list the branches available on remote and local machine
git branch -M main //change branch from master to main
git restore --staged file
git pull //pull whatever is in the remote repository to the local repo
branches //branches represents an independent line of development

git branch feature-a //creates a new branch called feature-a
git checkout feature-a //switches to the feature-a branch from the previous
git checkout -b feature-b // creates a branche and checkout into the branch. one step
press q to quit

//pull request
note: when working for a company, you will never push to the master branch or main branch directly.
what you end up doing is

1. pull the latest changes from the remote repository using 'git pull command'
2. create a branch of it ie. git checkout -b branch-name
3. start working on aa feature, makes commits
4. make pull request so that someone one the main can check your code that it makes sense and then marge to the branch

//squach and rebase
-squach and merge takes your branch and place it untop of the master

//issues

//contributio/collaboration

//rebase - it's advisable you rebase your changes against the remote master branch (this is bcos master will move on while you are working on your branch)
ie. bring the latest changes from master into your local machine

- when you rebase, you might or may not have conflicts. if conflicts, you resolve

note: while you can merge branches directly by using 'git merge branch-name', it is best practice to do it through pull request

- stach in git means to put aside your feature branch and bring in the remote main branch and then bring in the feature branch ontop of it again.
  then push to remote, make a pull request and after review, if no issues, you marge the branch to the master  
  git pull --rebase origin master
  git rebase --continue
  git rebase --abort //reverts back to before rebase

git branch -d branch-name //deletes branch

git fetch origin/master // updates the local master with the remote master

//pull recent changes into branch from remote

1. git checkout brach-name //change into desired branch
2. git pull //pull recent changes down from remote master
3. git push

//conflict resolution

//invite collaborator to repo
reference: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository

Inviting collaborators to a personal repository

    -Ask for the username of the person you're inviting as a collaborator. ...
    -On GitHub.com, navigate to the main page of the repository.
    -Under your repository name, click Settings.
    -In the "Access" section of the sidebar, click Collaborators & teams.
    -Click Invite a collaborator.

Well, typically when I have an outdated master locally and want to merge recent changes in a branch (say, my_branch) to master (both locally and remotely), I do the following,

    #Checkout the master branch locally.
     - git checkout master
     - Run git pull --rebase origin master (This pulls down the most up-to-date changes on master locally)
    # Checkout local branch say my_branch
       git checkout branch-name
      -Run git pull --rebase origin master(This updates your local branch against the most recent master on remote. You may need to resolve the conflicts here (if any that is))
    # checkout the master branch locally, again.
      - git checkout master
    # Run git merge my_branch
    # Run git push origin branch-name

git reset --hard HEAD~1 to go back to the commit before the merge:

Accept the local version.
To accept all changes on a file from the local version,
run: git checkout --ours <file name> .

Accept the remote version. To update the changes on a file from the remote branch,
run: git checkout --theirs <file name>

When you get the hash of the commit you want to get back to, run git reset --hard commit-before-the-merge
