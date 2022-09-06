echo 'begin'
CALL choco feature enable -n allowGlobalConfirmation
CAll choco install vagrant - y
CAll vagrant up

echo 'done'